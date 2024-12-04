import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all addresses
    port: 3000, // Default port for local testing
  },
  assetsInclude: ['**/*.m4v'] 
})
