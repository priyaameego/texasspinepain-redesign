import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false, // faster build
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-router';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
          }
        },
        // Consistent hash for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    }
  },
  // Optimize deps for faster dev startup
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-router', 'lucide-react']
  }
})
