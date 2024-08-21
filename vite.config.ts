import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://kaggom.korea.communication.azure.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/openai/threads?api-version=2024-05-01-preview'),
      },
    },
  }
})


