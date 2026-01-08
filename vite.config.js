import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting para reducir bundle inicial
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks separados
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['react-icons'],
        },
      },
    },
    // Optimizaciones de minificación
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true,
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // Source maps solo para errores
    sourcemap: false,
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
