// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './public',       // Tell Vite your entry point is the public folder
  build: {
    outDir: '../build',   // Output to /build
    emptyOutDir: true,
  },
})
