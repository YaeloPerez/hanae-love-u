export default function FirstTrip() {
  return (
    <section className="px-4 py-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary p-6 shadow-xl shadow-primary/10">
        <div className="absolute top-2 right-2 bg-primary text-background-dark text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
          Top #1
        </div>
        <div className="flex items-start gap-4">
          <div className="shrink-0 bg-primary/20 p-3 rounded-xl">
            <span className="material-symbols-outlined text-primary text-3xl">
              flight_takeoff
            </span>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-slate-100 font-extrabold text-lg">
              Nuestro Primer Viaje
            </h4>
            <p className="text-primary font-bold text-sm uppercase tracking-wide">
              Jiutepec, Morelos
            </p>
            <p className="text-slate-500 text-xs font-semibold">
              13 al 15 de Febrero, 2026
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Nuestro primer fin de semana juntos. El mejor regalo de San Valentín
              que pude haber pedido. ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
