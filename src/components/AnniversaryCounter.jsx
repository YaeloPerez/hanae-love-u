import { useTimeTogether } from '../hooks/useTimeTogether';

export default function AnniversaryCounter() {
  const { totalDays } = useTimeTogether();

  return (
    <section className="px-4 py-6">
      <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-6 border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest">
            Tiempo Juntos
          </p>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            {totalDays} días de pura felicidad
          </h3>
        </div>
        <div className="bg-primary text-background-dark p-3 rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
        </div>
      </div>
    </section>
  );
}
