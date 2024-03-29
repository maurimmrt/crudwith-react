/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/crudwith-react/',
	plugins: [react()],
	test: {
		environment: 'happy-dom',
	},
});
