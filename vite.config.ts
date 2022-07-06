/// <reference types="vitest" />
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'piniaRouter',
            fileName: (format: string) => `pinia-router.${format}.js`,
        },
    }
})