import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Nav() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between border-b border-primary/20 gap-3">
      <NavLink to="/" className="text-primary flex size-10 shrink-0 items-center justify-center">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
      </NavLink>

      <div className="flex gap-1 flex-1 justify-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
              isActive
                ? 'bg-primary text-background-dark'
                : 'text-slate-600 dark:text-slate-400 hover:text-primary'
            }`
          }
        >
          Nuestra Historia
        </NavLink>
        <NavLink
          to="/invitados"
          className={({ isActive }) =>
            `text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${
              isActive
                ? 'bg-primary text-background-dark'
                : 'text-slate-600 dark:text-slate-400 hover:text-primary'
            }`
          }
        >
          <span className="material-symbols-outlined text-sm">diversity_1</span>
          Invitados
        </NavLink>
      </div>

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
