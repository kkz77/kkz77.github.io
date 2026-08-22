import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://kkz77.github.io  -> keep base as '/'
// If you deploy to https://kkz77.github.io/some-repo -> set base to '/some-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
