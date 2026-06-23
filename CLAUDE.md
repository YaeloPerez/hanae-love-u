# hanae-love-u — Guía para Claude

Aplicación web personal hecha con React + Vite + Tailwind CSS, desplegada en Netlify.
Es un sitio de amor de Yael para Alejandra (Hanae/Kanao/MaoMao).

## Fecha de inicio de la relación
**19 de noviembre de 2025** — usar siempre esta fecha como `START_DATE` en `useTimeTogether.js`.

## Stack
- React 19 + Vite
- Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com">` + config inline en `index.html`, **no** hay `tailwind.config.js`)
- Google Material Symbols (íconos via CDN en `index.html`)
- Netlify (deploy automático desde `main`)
- Modo oscuro manual (`darkMode: "class"`) controlado por `useDarkMode.js` + switch en `Nav.jsx`
- Responsive: mobile-first, con ajustes `md:` para escritorio (ver convención abajo)

## Estructura de componentes
```
src/
├── hooks/
│   ├── useTimeTogether.js     ← tiempo dinámico (días, meses, días restantes) + helper monthsSince(date)
│   └── useDarkMode.js         ← estado de modo oscuro persistido en localStorage
├── data/
│   └── fotos.js               ← array de fotos de la galería (incluye date ISO por foto)
├── components/
│   ├── Nav.jsx                ← barra superior sticky + switch de modo oscuro
│   ├── Hero.jsx                ← foto principal + título dinámico de meses
│   ├── AnniversaryCounter.jsx  ← contador de días totales dinámico
│   ├── Chapters.jsx            ← capítulos por año/quarter (botones seleccionables, exporta `chapters`)
│   ├── PhotoGallery.jsx        ← galería de fotos, filtrable por capítulo seleccionado
│   ├── FirstTrip.jsx           ← tarjeta del primer viaje (Jiutepec, Feb 2026)
│   ├── HonorableMention.jsx    ← mención honorífica pequeña
│   ├── AnimeNights.jsx         ← noches de anime (JJK y Frieren)
│   ├── Letter.jsx              ← carta para Hanae (apertura dinámica con meses reales)
│   └── BottomNav.jsx           ← barra inferior fija (oculta en desktop, `md:hidden`)
└── App.jsx                     ← imports + layout shell + estado `selectedChapter` compartido
```

## Convenciones
- **Un componente por sección** — no meter lógica de UI en App.jsx.
- **Datos en `src/data/`** — si un componente tiene un array de ítems (fotos, series de anime, viajes, capítulos), extraerlo a su propio archivo en `src/data/`.
- **Tiempo dinámico siempre via `useTimeTogether`** — nunca hardcodear días o meses.
- **Colores** — usar las clases de Tailwind del tema: `text-primary`, `bg-primary`, `bg-background-light`, `bg-background-dark`. Definidas en el `<script>` de config de Tailwind dentro de `index.html` (no hay archivo `tailwind.config.js`).
- **Íconos** — Material Symbols con `<span className="material-symbols-outlined">nombre_icono</span>`. Para íconos rellenos: `style={{ fontVariationSettings: "'FILL' 1" }}`.
- **Modo oscuro** — toda clase de color debe tener su contraparte `dark:` (ej. `text-slate-900 dark:text-slate-100`). Si un componente usa un fondo o blur custom en CSS (como `.glass-card` en `index.html`), debe definirse también la variante `.dark .clase`.
- **Responsive** — mobile-first; agregar `md:` solo cuando el elemento se vea mal en escritorio (más ancho, grid en vez de scroll horizontal, etc). El contenedor general vive en `App.jsx` (`max-w-md md:max-w-3xl`).

## Cómo agregar contenido nuevo

### Nueva foto en la galería
Editar `src/data/fotos.js` y agregar un objeto con:
```js
{
  src: '/img/fotoN.jpeg',     // imagen en /public/img/, nombre consecutivo (revisar el último número usado)
  caption: 'Texto principal',
  fecha: 'Texto legible para mostrar', // ej. 'Sábado 13 de diciembre de 2025'
  date: 'YYYY-MM-DD',         // fecha real en ISO — se usa para calcular a qué capítulo pertenece
  nota: 'Texto pequeño',      // omitir si no aplica
  rotate: 'rotate-1',         // alternar entre rotate-1, -rotate-1, -rotate-2 — nunca repetir el mismo que la foto anterior
}
```
- **`date` es obligatorio** — `PhotoGallery.jsx` lo usa junto con `monthsSince()` (de `useTimeTogether.js`) para filtrar las fotos por capítulo. Sin `date`, la foto nunca aparecerá si hay un capítulo seleccionado.
- **No reutilizar `src`** — cada foto nueva necesita su propio archivo en `public/img/` con el siguiente número disponible (verificar con `ls public/img/`). Si la imagen aún no existe, está bien dejar la entrada en el código y avisar que falta copiar el archivo.
- **Revisar el `rotate` de la entrada anterior** antes de copiar/pegar una nueva — es un error común dejar el mismo valor repetido en varias fotos consecutivas.

### Nuevo viaje / evento especial
Crear `src/components/NuevoEvento.jsx` siguiendo el patrón de `FirstTrip.jsx`,
luego importarlo en `App.jsx` en el orden deseado.

### Nueva sección de lista (ej. canciones, series, restaurantes)
1. Crear `src/data/nombreLista.js` con el array de datos.
2. Crear `src/components/NombreSeccion.jsx` que importe esos datos.
3. Importar el componente en `App.jsx`.

### Nueva entrada de "capítulo"
Editar el array `chapters` (exportado) dentro de `src/components/Chapters.jsx`.
Cada capítulo tiene esta forma:
```js
{ year: 1, quarter: 2, startMonth: 3, endMonth: 5, icon: 'celebration', title: 'Los 100 Días y más' }
```
- `startMonth` / `endMonth` son meses contados desde `START_DATE` (0 = primer mes juntos).
- El estado (completado / actual / futuro) se calcula automáticamente comparando contra `months` del hook.
- Al entrar al Año 2, agregar capítulos con `year: 2` y `startMonth` desde 12.
- **Poner un título real apenas se sepa qué pasó en ese periodo** (en vez de placeholders como "Por escribir" o "Por vivir") — preguntar al usuario qué ocurrió en esas fechas antes de inventar un título.
- Cada capítulo es un botón clicable que filtra `PhotoGallery` mostrando solo las fotos cuyo `date` cae en su rango de meses (`App.jsx` mantiene el estado `selectedChapter` y se lo pasa a `Chapters` y `PhotoGallery`). Al cargar la página, se selecciona automáticamente el capítulo "actual".
- No es necesario tocar `PhotoGallery.jsx` al agregar un capítulo nuevo — el filtro funciona solo en base a las fechas (`date`) de las fotos.

### Texto dinámico en componentes
- **Meses en texto** — usar `useTimeTogether` y la helper `monthsLabel(n)` que ya existe en `Letter.jsx`.
  Si se necesita en otro componente, importar el hook y replicar la helper localmente.
- **Nunca escribir "X meses", "X días" o "Q1/Q2" de forma hardcodeada** si el valor cambia con el tiempo.

## Imágenes
Las imágenes van en `/public/img/`. Referenciadas como `/img/archivo.jpeg` (sin `public/`).

## Despliegue
Push a `main` → Netlify hace deploy automático.
Config en `netlify.toml` (redirects para SPA: `/* → /index.html`).
