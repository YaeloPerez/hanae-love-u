import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AnniversaryCounter from './components/AnniversaryCounter';
import PhotoGallery from './components/PhotoGallery';
import FirstTrip from './components/FirstTrip';
import HonorableMention from './components/HonorableMention';
import AnimeNights from './components/AnimeNights';
import Letter from './components/Letter';
import Chapters from './components/Chapters';
import BottomNav from './components/BottomNav';
import { useTimeTogether } from './hooks/useTimeTogether';

function App() {
  const { months, remainingDays } = useTimeTogether();

  useEffect(() => {
    const extra = remainingDays > 0 ? ` y ${remainingDays} días` : '';
    document.title = `Felices ${months} meses${extra} mi amooor 🩷`;
  }, [months, remainingDays]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <Nav />

      <main className="max-w-md mx-auto pb-24">
        <Hero />
        <AnniversaryCounter />
        <PhotoGallery />
        <FirstTrip />
        <HonorableMention />
        <AnimeNights />
        <Letter />
        <Chapters />

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

      <BottomNav />
    </div>
  );
}

export default App;
