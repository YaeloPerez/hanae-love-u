import { useTimeTogether } from '../hooks/useTimeTogether';

export default function Hero() {
  const { months, remainingDays } = useTimeTogether();

  const monthLabel = months === 1 ? 'Mes' : 'Meses';
  const extraDays =
    remainingDays > 0 ? ` y ${remainingDays} día${remainingDays !== 1 ? 's' : ''}` : '';

  return (
    <section className="p-4">
      <div
        className="relative overflow-hidden rounded-xl aspect-[4/5] flex flex-col items-center justify-end p-8 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(35, 15, 18, 0.8) 0%, rgba(35, 15, 18, 0.2) 50%, rgba(255, 194, 204, 0.1) 100%), url("/img/foto.jpeg")`,
          backgroundColor: '#ffc2cc33',
        }}
      >
        <div className="z-10 space-y-4">
          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
            ¡Felices {months} {monthLabel}{extraDays},<br />Alejandra!
          </h1>
          <p className="text-primary font-medium text-lg italic">
            Te amo demasiado, mi Hanae, Kanao, MaoMao...
          </p>
          <p className="text-slate-300 text-sm mt-1 font-semibold tracking-wide uppercase">
            Juntos desde el 19 de Noviembre, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
