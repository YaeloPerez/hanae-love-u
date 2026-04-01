import { fotos } from '../data/fotos';

export default function PhotoGallery() {
  return (
    <section className="py-6">
      <div className="px-4 mb-4 flex items-center justify-between">
        <h4 className="text-primary text-sm font-bold uppercase tracking-widest">
          Momentos Inolvidables
        </h4>
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
                <>
                  <br />
                  <span className="text-[10px] italic opacity-80 leading-tight block mt-1">
                    {foto.fecha}
                  </span>
                </>
              )}
              {foto.nota && (
                <>
                  <br />
                  <span className="text-[10px] italic opacity-80 leading-tight">
                    {foto.nota}
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
