import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/punkapi/',
  plugins: [react()],
  build: {
    target: 'es2015',
  },
})
