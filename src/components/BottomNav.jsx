export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-primary/10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl px-6 pb-2">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
      </a>
    </div>
  );
}
