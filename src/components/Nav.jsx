import { useDarkMode } from '../hooks/useDarkMode';

export default function Nav() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/20">
      <div className="text-primary flex size-10 shrink-0 items-center justify-center">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
      </div>
      <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
        Nuestra Historia
      </h2>
      <button
        onClick={() => setIsDark((d) => !d)}
        aria-label="Cambiar modo oscuro"
        className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-slate-300 dark:bg-primary/30 transition-colors"
      >
        <span
          className={[
            'inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform',
            isDark ? 'translate-x-6' : 'translate-x-1',
          ].join(' ')}
        >
          <span className="material-symbols-outlined text-[14px] text-primary">
            {isDark ? 'dark_mode' : 'light_mode'}
          </span>
        </span>
      </button>
    </nav>
  );
}
