/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		Vue(),
		AutoImport({
			imports: ['pinia', 'vue', 'vue-router'],
		}),
	],
	test: {
		globals: true,
		environment: 'happy-dom',
	},
	root: '.',
});
