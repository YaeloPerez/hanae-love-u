function App() {
  const fotos = [
    {
      src: "/img/foto1.jpeg",
      caption: "Nuestra primera cita ✨",
      fecha: "Sábado 13 de diciembre de 2025",
      nota: '"pero para niña jeje"',
      rotate: "-rotate-2",
    },
    {
      src: "/img/foto2.jpeg",
      caption: "1 de Enero - Cine y una mini tú",
      nota: "Zootopia, y una Kanao de regalo de Año Nuevo ¡Me encantó!",
      rotate: "rotate-1",
    },
    {
      src: "/img/foto3.jpeg",
      caption: "17 de Enero - Costco 🛒",
      nota: "Perdidos por entrar al Costco cuando realmente era la otraaaaaaaa!",
      rotate: "-rotate-1",
    },
    {
      src: "/img/foto4.jpeg",
      caption: "14 de febrero - Boda de Paty y Raciel ❤️",
      nota: "Dandolo todo en la pista de baile, con una dosis de DoloNeurobion 😂",
      rotate: "rotate-1",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/20">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Nuestra Historia
        </h2>
      </nav>

      <main className="max-w-md mx-auto pb-24">

        {/* Hero Section */}
        <section className="p-4">
          <div
            className="relative overflow-hidden rounded-xl aspect-[4/5] flex flex-col items-center justify-end p-8 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(35, 15, 18, 0.8) 0%, rgba(35, 15, 18, 0.2) 50%, rgba(255, 194, 204, 0.1) 100%), url("/img/foto.jpeg")`,
              backgroundColor: "#ffc2cc33",
            }}
          >
            <div className="z-10 space-y-4">
              <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
                ¡Felices 3 Meses,<br />Alejandra!
              </h1>
              <p className="text-primary font-medium text-lg italic">
                Te amo demasiado, mi Hanae, Kanao, MaoMao...
              </p>
              <p className="text-slate-300 text-sm mt-1 font-semibold tracking-wide uppercase">
                Juntos desde el 19 de Noviembre, 2025
              </p>
              {/* <button className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 mx-auto">
                <span className="material-symbols-outlined">auto_awesome</span>
                Nuestra Promesa
              </button> */}
            </div>
          </div>
        </section>

        {/* Anniversary Counter */}
        <section className="px-4 py-6">
          <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-6 border border-primary/20 flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest">Tiempo Juntos</p>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">90 días de pura felicidad</h3>
            </div>
            <div className="bg-primary text-background-dark p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-6">
          <div className="px-4 mb-4 flex items-center justify-between">
            <h4 className="text-primary text-sm font-bold uppercase tracking-widest">Momentos Inolvidables</h4>
            <span className="material-symbols-outlined text-primary">collections</span>
          </div>
          <div className="flex overflow-x-auto gap-4 px-4 custom-scrollbar snap-x">
            {fotos.map((foto, i) => (
              <div
                key={i}
                className={`snap-center shrink-0 w-64 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md transform ${foto.rotate}`}
              >
                <div className="aspect-square rounded-md overflow-hidden bg-primary/20">
                  <img
                    className="w-full h-full object-cover"
                    src={foto.src}
                    alt={foto.caption}
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                  {foto.caption}
                  {foto.fecha && (
                    <><br /><span className="text-[10px] italic opacity-80 leading-tight block mt-1">{foto.fecha}</span></>
                  )}
                  {foto.nota && (
                    <><br /><span className="text-[10px] italic opacity-80 leading-tight">{foto.nota}</span></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Primer Viaje */}
        <section className="px-4 py-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary p-6 shadow-xl shadow-primary/10">
            <div className="absolute top-2 right-2 bg-primary text-background-dark text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Top #1</div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-primary/20 p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-extrabold text-lg">Nuestro Primer Viaje</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-wide">Jiutepec, Morelos</p>
                <p className="text-slate-500 text-xs font-semibold">13 al 15 de Febrero, 2026</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Nuestro primer fin de semana juntos. El mejor regalo de San Valentín que pude haber pedido. ❤️
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mención Honorífica */}
        <section className="px-4 py-2">
          <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/5 border border-primary/10 p-3 rounded-lg">
            <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Mención Honorífica</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium italic">Las pequeñas visitas conyugales 7u7 entre semana.</p>
            </div>
          </div>
        </section>

        {/* Noches de Anime */}
        <section className="px-4 py-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-l-4 border-primary shadow-sm">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">movie_filter</span>
              Nuestras Noches de Anime
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <span className="text-primary font-bold text-xs">Jue</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold">Jujutsu Kaisen</span> — Tu recomendación favorita 🤩
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <span className="text-primary font-bold text-xs">Vie</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold">Frieren</span> — Mi recomendación para ti 🪄
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carta */}
        <section className="px-4 py-8">
          <div className="glass-card rounded-xl p-8 relative overflow-hidden border-2 border-primary/40">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Para mi Hanae,</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic text-lg">
                Tres meses pueden parecer poco tiempo para algunos, pero contigo cada segundo ha sido un tesoro. Tus mensajes por las mañanas iluminan mis días más que cualquier sol, tus abrazos son mi refugio favorito, y tu risa es la melodía que quiero escuchar para siempre. Eres mi compañera de aventuras, mi confidente y mi amor más puro. Cada momento contigo es una bendición, y no puedo esperar a seguir construyendo esta hermosa historia juntos.
                <br /><br />
                Gracias por dejarme ser parte de tu mundo y por ser mi niña preciosa. Prometo seguir cuidando de nosotros y de este amor tan bonito que estamos viviendo día a día.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold">YP</div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Siempre tuyo,</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-tighter">Yael Pérez</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulos */}
        <section className="px-4 py-4 grid grid-cols-2 gap-4">
          <div className="bg-primary/20 dark:bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center gap-2 border border-primary/10">
            <span className="material-symbols-outlined text-primary">auto_stories</span>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Q1</p>
            <p className="text-sm font-medium">El Comienzo</p>
          </div>
          <div className="bg-primary/20 dark:bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center gap-2 border border-primary/10">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Muchos más</p>
            <p className="text-sm font-medium">Por venir</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center px-4 pb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold">
            <span className="h-px w-8 bg-primary/30"></span>
            <span>Por muchos meses más</span>
            <span className="h-px w-8 bg-primary/30"></span>
          </div>
          <p className="mt-4 text-xs text-slate-400 uppercase tracking-[0.3em]">Alejandra &amp; Yael</p>
        </footer>

      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-primary/10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl px-6 pb-2">
        {/* <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
          <span className="material-symbols-outlined text-2xl">home</span>
        </a> */}
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        </a>
        {/* <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
          <span className="material-symbols-outlined text-2xl">settings</span>
        </a> */}
      </div>

    </div>
  );
}

export default App;
