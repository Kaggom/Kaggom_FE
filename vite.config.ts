import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // 프록시 경로
                target: 'http://20.41.121.150:8000', // 실제 API 서버
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // /api 경로 제거
            },
            }
          },
})


