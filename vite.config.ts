import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/auth/google': {
      //           target: 'https://fnddz5n9-3000.asse.devtunnels.ms',
      //           changeOrigin: true,
      //           secure: false,
      // },
    },
  }
})


