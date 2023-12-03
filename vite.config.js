/* eslint-disable */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@core': path.resolve(__dirname, './src/core'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@services': path.resolve(__dirname, './src/services'),
            '@components': path.resolve(__dirname, './src/app/components'),
            '@data': path.resolve(__dirname, './src/data'),
        }
    },
    server: {
        port: 3000
    }
});
