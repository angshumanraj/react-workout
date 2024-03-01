import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/workout':'http://localhost:1000',
    }
  },
  plugins: [react()],
})
