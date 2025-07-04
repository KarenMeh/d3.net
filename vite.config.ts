import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['79b3-143-44-197-4.ngrok-free.app', 'e737-143-44-197-4.ngrok-free.app'],
  },
});
