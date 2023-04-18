import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig(() => {
  return {
    build: {
      minify: 'terser',
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'react-error-boundary'],
          },
        },
      },
      terserOptions: {
        mangle: {
          properties: true,
        },
        toplevel: true,
      },
    },
    plugins: [react(), vanillaExtractPlugin(), splitVendorChunkPlugin()],
  };
});
