import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useInvitados() {
  const [invitados, setInvitados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('invitados')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) setError(error.message);
    else setInvitados(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function add(invitado) {
    const { error } = await supabase.from('invitados').insert(invitado);
    if (error) throw error;
    await load();
  }

  async function update(id, changes) {
    const { error } = await supabase.from('invitados').update(changes).eq('id', id);
    if (error) throw error;
    await load();
  }

  async function remove(id) {
    const { error } = await supabase.from('invitados').delete().eq('id', id);
    if (error) throw error;
    await load();
  }

  const novia = invitados.filter((i) => i.lado === 'novia');
  const novio = invitados.filter((i) => i.lado === 'novio');

  const sum = (list) => list.reduce((acc, i) => acc + (i.cantidad ?? 1), 0);

  const stats = {
    total: sum(invitados),
    confirmados: sum(invitados.filter((i) => i.confirmado === 'si')),
    pendientes: sum(invitados.filter((i) => i.confirmado === 'pendiente')),
    declinados: sum(invitados.filter((i) => i.confirmado === 'no')),
  };

  return { novia, novio, stats, loading, error, add, update, remove };
}
