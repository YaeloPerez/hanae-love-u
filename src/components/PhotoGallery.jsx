import { fotos } from '../data/fotos';
import { monthsSince } from '../hooks/useTimeTogether';

export default function PhotoGallery({ selectedChapter, onClearFilter }) {
  const visibleFotos = selectedChapter
    ? fotos.filter((foto) => {
        const month = monthsSince(new Date(`${foto.date}T00:00:00`));
        return month >= selectedChapter.startMonth && month <= selectedChapter.endMonth;
      })
    : fotos;

  return (
    <section id="galeria" className="py-6">
      <div className="px-4 mb-4 flex items-center justify-between">
        <h4 className="text-primary text-sm font-bold uppercase tracking-widest">
          {selectedChapter ? selectedChapter.title : 'Momentos Inolvidables'}
        </h4>
        {selectedChapter ? (
          <button
            type="button"
            onClick={onClearFilter}
            className="text-[10px] font-bold text-primary uppercase tracking-widest underline"
          >
            Ver todos
          </button>
        ) : (
          <span className="material-symbols-outlined text-primary">collections</span>
        )}
      </div>

      {visibleFotos.length === 0 ? (
        <p className="px-4 text-sm text-slate-400 italic">
          Aún no hay momentos guardados en este capítulo.
        </p>
      ) : (
        <div className="flex overflow-x-auto gap-4 px-4 custom-scrollbar snap-x md:grid md:grid-cols-3 md:overflow-visible md:snap-none">
          {visibleFotos.map((foto, i) => (
            <div
              key={i}
              className={`snap-center shrink-0 w-64 md:w-auto bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md transform ${foto.rotate}`}
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
      )}
    </section>
  );
}
