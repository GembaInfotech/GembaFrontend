import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, },
  server: {
    proxy: {
     "/v1": "http://localhost:8000"
    },
    watch: {
      usePolling: true,
    },
  },
})


