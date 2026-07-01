import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AnniversaryCounter from './components/AnniversaryCounter';
import PhotoGallery from './components/PhotoGallery';
import FirstTrip from './components/FirstTrip';
import HonorableMention from './components/HonorableMention';
import AnimeNights from './components/AnimeNights';
import Letter from './components/Letter';
import Chapters, { chapters } from './components/Chapters';
import BottomNav from './components/BottomNav';
import Invitados from './pages/Invitados';
import { useTimeTogether } from './hooks/useTimeTogether';

function Home() {
  const { months, remainingDays } = useTimeTogether();
  const [selectedChapter, setSelectedChapter] = useState(() =>
    chapters.find((c) => months >= c.startMonth && months <= c.endMonth) ?? null
  );

  useEffect(() => {
    const extra = remainingDays > 0 ? ` y ${remainingDays} días` : '';
    document.title = `Felices ${months} meses${extra} mi amooor 🩷`;
  }, [months, remainingDays]);

  function handleSelectChapter(chapter) {
    setSelectedChapter((prev) =>
      prev && prev.year === chapter.year && prev.quarter === chapter.quarter ? null : chapter
    );
  }

  return (
    <main className="max-w-md md:max-w-3xl mx-auto pb-24 md:pb-12">
      <Hero />
      <AnniversaryCounter />
      <Chapters selectedChapter={selectedChapter} onSelect={handleSelectChapter} />
      <PhotoGallery
        selectedChapter={selectedChapter}
        onClearFilter={() => setSelectedChapter(null)}
      />
      <FirstTrip />
      <HonorableMention />
      <AnimeNights />
      <Letter />

      <footer className="mt-12 text-center px-4 pb-12">
        <div className="inline-flex items-center gap-2 text-primary font-bold">
          <span className="h-px w-8 bg-primary/30" />
          <span>Por muchos meses más</span>
          <span className="h-px w-8 bg-primary/30" />
        </div>
        <p className="mt-4 text-xs text-slate-400 uppercase tracking-[0.3em]">
          Alejandra &amp; Yael
        </p>
      </footer>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/invitados"
          element={
            <main className="max-w-md md:max-w-3xl mx-auto pb-24 md:pb-12">
              <Invitados />
            </main>
          }
        />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
