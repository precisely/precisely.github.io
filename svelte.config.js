// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'; // for static site
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [svg()]
		}
	}
};

export default config;
