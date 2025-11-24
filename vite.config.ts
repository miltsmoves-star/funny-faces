import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Pass API_KEY from Vercel environment variables to the app
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.API_KEY || process.env.VITE_API_KEY)
  }
})
