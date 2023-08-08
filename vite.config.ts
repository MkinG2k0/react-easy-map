import typescript from '@rollup/plugin-typescript'
import path from 'path'
import colors from 'picocolors'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import progress from 'vite-plugin-progress'

export default defineConfig({
	plugins: [
		progress({
			format: `Building ${colors.green('[:bar]')} :percent :eta`,
			total: 100,
			width: 60,
			// complete: "=",
			// incomplete: "",
		}),
	],

	server: {
		port: 3123,
	},
	// preview: {
	//   port: 3124,
	// },
	build: {
		manifest: true,
		minify: true,
		reportCompressedSize: true,
		lib: {
			entry: path.resolve(__dirname, 'src/main.ts'),
			fileName: 'main',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [],
			plugins: [
				typescriptPaths({
					preserveExtensions: true,
				}),
				typescript({
					declaration: true,
					sourceMap: true,
					outDir: 'dist',
					exclude: ['**/__tests__'],
				}),
				visualizer({
					title: 'visualizer - vite-vanilla-ts-module',
					template: 'network',
				}),
			],
		},
	},
})
