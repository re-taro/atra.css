import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import compress from 'vite-plugin-compression';

export default defineConfig(() => {
  return {
    base: '/atra.css/',
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
    plugins: [
      react(),
      vanillaExtractPlugin(),
      splitVendorChunkPlugin(),
      compress({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
  };
});
