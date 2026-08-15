import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This project is deployed to GitHub Pages as a project site at:
  // https://moustafa-tech.github.io/portfolio/
  // The base path MUST match the repository name (case-sensitive) so that
  // built asset URLs (JS, CSS, images, the CV, the favicon) resolve under
  // /portfolio/ instead of the domain root.
  base: '/portfolio/',
})

