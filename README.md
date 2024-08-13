# B++

## Run the project

1. Install dependencies:
   `npm install` (Node.js required)

2. Start development server:
   `npm run dev`<br>
   Or to open in browser automatically:
   `npm run dev -- --open`

3. Important: Update Vite configuration
   - Go to http://localhost:5173/static
   - Copy the first URL at the top
   - Paste it into `vite.config.js` in the root folder:

```js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['Paste the url here'],
    },
  },
})
```

## Navigate through the files

The entry point is `src/routes/+page.svelte`.<br>
All the components live in `src/lib/components`.<br>
All assets are located in the `static` folder.

## Tech stack

[SvelteKit](https://kit.svelte.dev/docs/introduction) (JS framework)<br>
[TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit) (CSS framework)<br>
[p5.js](https://p5js.org/) (for creating the particles)<br>
[GSAP](https://gsap.com/resources/) (for creating animations)<br>
[lenis.js](https://github.com/darkroomengineering/lenis) (for smoothing scroll)
