import adapter from '@sveltejs/adapter-static'; // for static site
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';

const dev = process.env.dev;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter(),
		vite: {
			plugins: [svg()]
		}
	}
};

export default config;
