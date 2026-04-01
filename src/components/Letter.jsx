import { useTimeTogether } from '../hooks/useTimeTogether';

function monthsLabel(n) {
  if (n === 1) return 'Un mes';
  return `${n} meses`;
}

export default function Letter() {
  const { months } = useTimeTogether();

  return (
    <section className="px-4 py-8">
      <div className="glass-card rounded-xl p-8 relative overflow-hidden border-2 border-primary/40">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
        <div className="relative z-10">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">
            format_quote
          </span>
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Para mi Hanae,
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic text-lg">
            {monthsLabel(months)} pueden parecer poco tiempo para algunos, pero contigo cada
            segundo ha sido un tesoro. Tus mensajes por las mañanas iluminan mis
            días más que cualquier sol, tus abrazos son mi refugio favorito, y tu
            risa es la melodía que quiero escuchar para siempre. Eres mi compañera
            de aventuras, mi confidente y mi amor más puro. Cada momento contigo
            es una bendición, y no puedo esperar a seguir construyendo esta
            hermosa historia juntos.
            <br />
            <br />
            Gracias por dejarme ser parte de tu mundo y por ser mi niña preciosa.
            Prometo seguir cuidando de nosotros y de este amor tan bonito que
            estamos viviendo día a día.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold">
              YP
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Siempre tuyo,
              </p>
              <p className="text-xs text-primary font-bold uppercase tracking-tighter">
                Yael Pérez
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
