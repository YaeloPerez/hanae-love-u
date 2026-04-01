export default function HonorableMention() {
  return (
    <section className="px-4 py-2">
      <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/5 border border-primary/10 p-3 rounded-lg">
        <span className="material-symbols-outlined text-primary text-xl">
          workspace_premium
        </span>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
            Mención Honorífica
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium italic">
            Las pequeñas visitas conyugales 7u7 entre semana.
          </p>
        </div>
      </div>
    </section>
  );
}
