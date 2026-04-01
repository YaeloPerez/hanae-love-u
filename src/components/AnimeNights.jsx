const series = [
  {
    dia: 'Jue',
    titulo: 'Jujutsu Kaisen',
    descripcion: 'Tu recomendación favorita 🤩',
  },
  {
    dia: 'Vie',
    titulo: 'Frieren',
    descripcion: 'Mi recomendación para ti 🪄',
  },
];

export default function AnimeNights() {
  return (
    <section className="px-4 py-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-l-4 border-primary shadow-sm">
        <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">movie_filter</span>
          Nuestras Noches de Anime
        </h4>
        <div className="space-y-3">
          {series.map((s) => (
            <div key={s.dia} className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <span className="text-primary font-bold text-xs">{s.dia}</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold">{s.titulo}</span> — {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
