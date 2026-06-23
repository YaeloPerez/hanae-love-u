import { useTimeTogether } from '../hooks/useTimeTogether';

// Cada capítulo cubre 3 meses (un quarter del año juntos)
export const chapters = [
  { year: 1, quarter: 1, startMonth: 0,  endMonth: 2,  icon: 'auto_stories',  title: 'El Comienzo' },
  { year: 1, quarter: 2, startMonth: 3,  endMonth: 5,  icon: 'celebration',   title: 'Los 100 Días y más' },
  { year: 1, quarter: 3, startMonth: 6,  endMonth: 8,  icon: 'explore',       title: 'Carretera y Calcetines Mojados' },
  { year: 1, quarter: 4, startMonth: 9,  endMonth: 11, icon: 'favorite',      title: 'Por vivir' },
];

export default function Chapters({ selectedChapter, onSelect }) {
  const { months } = useTimeTogether();

  return (
    <section className="px-4 py-4">
      <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-lg">menu_book</span>
        Año 1 — Nuestra Historia
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {chapters.map((c) => {
          const completed = months > c.endMonth;
          const current   = months >= c.startMonth && months <= c.endMonth;
          const selected  = selectedChapter?.year === c.year && selectedChapter?.quarter === c.quarter;

          return (
            <button
              key={`${c.year}-${c.quarter}`}
              type="button"
              onClick={() => onSelect?.(c)}
              aria-pressed={selected}
              className={[
                'p-4 rounded-xl flex flex-col items-center text-center gap-2 border transition-all cursor-pointer',
                selected
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark'
                  : '',
                completed
                  ? 'bg-primary/30 dark:bg-primary/20 border-primary/40 opacity-80'
                  : current
                  ? 'bg-primary/20 dark:bg-primary/15 border-primary shadow-md shadow-primary/20'
                  : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-50',
              ].join(' ')}
            >
              {/* Icono de estado */}
              <span
                className={[
                  'material-symbols-outlined text-2xl',
                  completed || current ? 'text-primary' : 'text-slate-400',
                ].join(' ')}
                style={current ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {completed ? 'check_circle' : c.icon}
              </span>

              {/* Label */}
              <p
                className={[
                  'text-[10px] font-black uppercase tracking-widest',
                  completed || current ? 'text-primary' : 'text-slate-400',
                ].join(' ')}
              >
                Año {c.year} · Q{c.quarter}
              </p>

              {/* Título */}
              <p
                className={[
                  'text-xs font-semibold leading-tight',
                  completed
                    ? 'text-slate-600 dark:text-slate-300 line-through decoration-primary/60'
                    : current
                    ? 'text-slate-900 dark:text-slate-100 font-bold'
                    : 'text-slate-400',
                ].join(' ')}
              >
                {c.title}
              </p>

              {/* Badge */}
              {current && (
                <span className="bg-primary text-background-dark text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight">
                  Ahora
                </span>
              )}
              {completed && (
                <span className="bg-primary/20 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
                  ✓ Vivido
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
