# hanae-love-u — Guía para Claude

Aplicación web personal hecha con React + Vite + Tailwind CSS, desplegada en Netlify.
Es un sitio de amor de Yael para Alejandra (Hanae/Kanao/MaoMao).

## Fecha de inicio de la relación
**19 de noviembre de 2025** — usar siempre esta fecha como `START_DATE` en `useTimeTogether.js`.

## Stack
- React 18 + Vite
- Tailwind CSS (config en `tailwind.config.js`)
- Google Material Symbols (íconos via CDN en `index.html`)
- Netlify (deploy automático desde `main`)

## Estructura de componentes
```
src/
├── hooks/
│   └── useTimeTogether.js     ← tiempo dinámico (días, meses, días restantes)
├── data/
│   └── fotos.js               ← array de fotos de la galería
├── components/
│   ├── Nav.jsx                ← barra superior sticky
│   ├── Hero.jsx               ← foto principal + título dinámico de meses
│   ├── AnniversaryCounter.jsx ← contador de días totales dinámico
│   ├── PhotoGallery.jsx       ← carrusel horizontal de fotos
│   ├── FirstTrip.jsx          ← tarjeta del primer viaje (Jiutepec, Feb 2026)
│   ├── HonorableMention.jsx   ← mención honorífica pequeña
│   ├── AnimeNights.jsx        ← noches de anime (JJK y Frieren)
│   ├── Letter.jsx             ← carta para Hanae (apertura dinámica con meses reales)
│   ├── Chapters.jsx           ← capítulos por año/quarter, estado dinámico (completado/actual/futuro)
│   └── BottomNav.jsx          ← barra inferior fija
└── App.jsx                    ← solo imports + layout shell
```

## Convenciones
- **Un componente por sección** — no meter lógica de UI en App.jsx.
- **Datos en `src/data/`** — si un componente tiene un array de ítems (fotos, series de anime, viajes, capítulos), extraerlo a su propio archivo en `src/data/`.
- **Tiempo dinámico siempre via `useTimeTogether`** — nunca hardcodear días o meses.
- **Colores** — usar las clases de Tailwind del tema: `text-primary`, `bg-primary`, `bg-background-light`, `bg-background-dark`. Ver `tailwind.config.js` para los valores exactos.
- **Íconos** — Material Symbols con `<span className="material-symbols-outlined">nombre_icono</span>`. Para íconos rellenos: `style={{ fontVariationSettings: "'FILL' 1" }}`.

## Cómo agregar contenido nuevo

### Nueva foto en la galería
Editar `src/data/fotos.js` y agregar un objeto con:
```js
{
  src: '/img/fotoN.jpeg',   // imagen en /public/img/
  caption: 'Texto principal',
  fecha: 'Opcional',        // omitir si no aplica
  nota: 'Texto pequeño',    // omitir si no aplica
  rotate: 'rotate-1',       // alternár entre rotate-1, -rotate-1, -rotate-2
}
```

### Nuevo viaje / evento especial
Crear `src/components/NuevoEvento.jsx` siguiendo el patrón de `FirstTrip.jsx`,
luego importarlo en `App.jsx` en el orden deseado.

### Nueva sección de lista (ej. canciones, series, restaurantes)
1. Crear `src/data/nombreLista.js` con el array de datos.
2. Crear `src/components/NombreSeccion.jsx` que importe esos datos.
3. Importar el componente en `App.jsx`.

### Nueva entrada de "capítulo"
Editar el array `chapters` dentro de `src/components/Chapters.jsx`.
Cada capítulo tiene esta forma:
```js
{ year: 1, quarter: 2, startMonth: 3, endMonth: 5, icon: 'celebration', title: 'Los 100 Días y más' }
```
- `startMonth` / `endMonth` son meses contados desde `START_DATE` (0 = primer mes juntos).
- El estado (completado / actual / futuro) se calcula automáticamente comparando contra `months` del hook.
- Al entrar al Año 2, agregar capítulos con `year: 2` y `startMonth` desde 12.

### Texto dinámico en componentes
- **Meses en texto** — usar `useTimeTogether` y la helper `monthsLabel(n)` que ya existe en `Letter.jsx`.
  Si se necesita en otro componente, importar el hook y replicar la helper localmente.
- **Nunca escribir "X meses", "X días" o "Q1/Q2" de forma hardcodeada** si el valor cambia con el tiempo.

## Imágenes
Las imágenes van en `/public/img/`. Referenciadas como `/img/archivo.jpeg` (sin `public/`).

## Despliegue
Push a `main` → Netlify hace deploy automático.
Config en `netlify.toml` (redirects para SPA: `/* → /index.html`).
