import { defineConfig } from 'vite'

// The game is one self-contained index.html: no modules, no assets, nothing fetched.
// Vite is here only so the portfolio's release workflow has a build to run.
export default defineConfig({
  // Served from a sub-path of the portfolio's Hosting site.
  base: '/rocket/',
})
