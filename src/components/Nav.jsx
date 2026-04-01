export default function Nav() {
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
      <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
        Nuestra Historia
      </h2>
    </nav>
  );
}
