export default function NuestraBoda() {
  return (
    <div className="px-4 py-16 flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center size-28 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20">
        <span
          className="material-symbols-outlined text-primary text-6xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          construction
        </span>
        <span
          className="material-symbols-outlined text-primary text-2xl absolute -top-1 -right-1 animate-pulse"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
      </div>

      <p className="mt-8 text-xs font-bold text-primary uppercase tracking-[0.3em]">
        Nuestra Boda
      </p>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        Trabajando :3
      </h2>
      <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        Estamos preparando todo con mucho cariño para esta sección. Muy pronto
        vas a encontrar aquí todo sobre nuestro gran día.
      </p>

      <div className="mt-8 inline-flex items-center gap-2 text-primary font-bold">
        <span className="h-px w-8 bg-primary/30" />
        <span className="material-symbols-outlined text-base">diversity_1</span>
        <span className="h-px w-8 bg-primary/30" />
      </div>
      <p className="mt-4 text-xs text-slate-400 uppercase tracking-[0.3em]">
        Alejandra &amp; Yael
      </p>
    </div>
  );
}
