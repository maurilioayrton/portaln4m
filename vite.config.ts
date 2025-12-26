import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que o base path seja sempre /
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
  define: {
    __BASE_PATH__: JSON.stringify('/'), // Força base path como /
    __IS_PREVIEW__: JSON.stringify(false),
    __READDY_PROJECT_ID__: JSON.stringify(''),
    __READDY_VERSION_ID__: JSON.stringify(''),
    __READDY_AI_DOMAIN__: JSON.stringify('')
  }
})
