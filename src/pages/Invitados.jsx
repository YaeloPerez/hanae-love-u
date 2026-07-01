import { useState } from 'react';
import { useInvitados } from '../hooks/useInvitados';

const CONFIRMADO_LABEL = { si: 'Confirmado', no: 'Declinó', pendiente: 'Pendiente' };
const CONFIRMADO_COLOR = {
  si: 'bg-green-500/20 text-green-400 border-green-500/30',
  no: 'bg-red-500/20 text-red-400 border-red-500/30',
  pendiente: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

const EMPTY_FORM = { nombre: '', lado: 'novio', confirmado: 'pendiente', cantidad: 1, notas: '' };

function InvitadoForm({ initial = EMPTY_FORM, onSave, onCancel, lado }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, ...initial, lado: lado ?? initial.lado });
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({ ...form, cantidad: Number(form.cantidad) || 1, notas: form.notas || null });
      onCancel();
    } catch (err) {
      alert('Error al guardar: ' + err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background-light dark:bg-slate-800 rounded-xl border border-primary/20 p-4 flex flex-col gap-3">
      <input
        required
        value={form.nombre}
        onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
        placeholder="Nombre o grupo (Familia... )"
        className="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex gap-2">
        <select
          value={form.confirmado}
          onChange={(e) => setForm((f) => ({ ...f, confirmado: e.target.value }))}
          className="flex-1 rounded-lg border border-primary/20 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="pendiente">Pendiente</option>
          <option value="si">Confirmado</option>
          <option value="no">Declinó</option>
        </select>
        <label className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-lg border border-primary/20 bg-white dark:bg-slate-700 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Personas
          <input
            type="number"
            min="1"
            max="99"
            value={form.cantidad}
            onChange={(e) => setForm((f) => ({ ...f, cantidad: e.target.value }))}
            className="w-12 text-center text-sm font-bold text-slate-900 dark:text-slate-100 bg-transparent focus:outline-none"
          />
        </label>
      </div>
      <textarea
        value={form.notas}
        onChange={(e) => setForm((f) => ({ ...f, notas: e.target.value }))}
        placeholder="Notas (mesa, alergias, relación…)"
        rows={2}
        className="w-full rounded-lg border border-primary/20 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
          Cancelar
        </button>
        <button type="submit" disabled={saving} className="px-4 py-1.5 bg-primary text-background-dark rounded-lg text-xs font-bold disabled:opacity-60">
          {saving ? 'Guardando…' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}

function InvitadoCard({ invitado, onEdit, onDelete }) {
  const [deleting, setDeleting] = useState(false);
  const cantidad = invitado.cantidad ?? 1;

  async function handleDelete() {
    if (!confirm(`¿Eliminar "${invitado.nombre}"?`)) return;
    setDeleting(true);
    try { await onDelete(invitado.id); } finally { setDeleting(false); }
  }

  return (
    <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-primary/10 p-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {cantidad > 1 && (
            <span className="shrink-0 flex items-center gap-0.5 bg-primary/20 text-primary text-[11px] font-extrabold px-2 py-0.5 rounded-full border border-primary/30">
              <span className="material-symbols-outlined text-[13px]">group</span>
              {cantidad}
            </span>
          )}
          <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-tight truncate">{invitado.nombre}</p>
        </div>
        <div className="flex gap-1 shrink-0">
          <button onClick={() => onEdit(invitado)} className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base">edit</span>
          </button>
          <button onClick={handleDelete} disabled={deleting} className="text-slate-400 hover:text-red-400 transition-colors">
            <span className="material-symbols-outlined text-base">{deleting ? 'hourglass_empty' : 'delete'}</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${CONFIRMADO_COLOR[invitado.confirmado]}`}>
          {CONFIRMADO_LABEL[invitado.confirmado]}
        </span>
      </div>
      {invitado.notas && (
        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-snug">{invitado.notas}</p>
      )}
    </div>
  );
}

function Columna({ titulo, icono, invitados, lado, onAdd, onEdit, onDelete }) {
  const [showForm, setShowForm] = useState(false);
  const sum = (list) => list.reduce((acc, i) => acc + (i.cantidad ?? 1), 0);
  const totalPersonas = sum(invitados);
  const confirmadas = sum(invitados.filter((i) => i.confirmado === 'si'));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-primary font-extrabold text-base flex items-center gap-2">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icono}</span>
            {titulo}
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {invitados.length} {invitados.length === 1 ? 'entrada' : 'entradas'} · {totalPersonas} personas · {confirmadas} confirmadas
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-1 bg-primary text-background-dark text-xs font-bold px-3 py-1.5 rounded-full"
        >
          <span className="material-symbols-outlined text-sm">person_add</span>
          Agregar
        </button>
      </div>

      {showForm && (
        <InvitadoForm lado={lado} onSave={onAdd} onCancel={() => setShowForm(false)} />
      )}

      {invitados.length === 0 && !showForm && (
        <p className="text-sm text-slate-400 italic text-center py-6">Aún no hay invitados</p>
      )}

      <div className="flex flex-col gap-2">
        {invitados.map((inv) => (
          <InvitadoCard key={inv.id} invitado={inv} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default function Invitados() {
  const { novia, novio, stats, loading, error, add, update, remove } = useInvitados();
  const [editTarget, setEditTarget] = useState(null);

  function handleEdit(inv) { setEditTarget(inv); }
  function handleCancelEdit() { setEditTarget(null); }
  async function handleUpdate(data) { await update(editTarget.id, data); }

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <span className="material-symbols-outlined text-primary text-4xl animate-spin">autorenew</span>
    </div>
  );

  if (error) return (
    <p className="text-center text-red-400 py-12">Error: {error}</p>
  );

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_1</span>
          Lista de Invitados
        </h2>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {[
            { label: 'Total', value: stats.total, icon: 'groups' },
            { label: 'Confirmados', value: stats.confirmados, icon: 'check_circle' },
            { label: 'Pendientes', value: stats.pendientes, icon: 'schedule' },
            { label: 'Declinaron', value: stats.declinados, icon: 'cancel' },
          ].map((s) => (
            <div key={s.label} className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-xl p-3 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-xl">{s.icon}</span>
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{s.value}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {editTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm">
            <p className="text-sm font-bold text-white mb-2">Editar: {editTarget.nombre}</p>
            <InvitadoForm initial={editTarget} onSave={handleUpdate} onCancel={handleCancelEdit} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Columna titulo="De la Novia" icono="favorite" invitados={novia} lado="novia" onAdd={add} onEdit={handleEdit} onDelete={remove} />
        <Columna titulo="Del Novio" icono="handshake" invitados={novio} lado="novio" onAdd={add} onEdit={handleEdit} onDelete={remove} />
      </div>
    </div>
  );
}
