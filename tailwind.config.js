/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: '"Geist Variable", "Inter",serif',
				serif: '"Source Serif 4 Variable", serif',
				mono: '"Geist Mono Variable",monospace'
			},
			screens: {
				mobile: '640px',
				tablet: '1024px',
				laptop: '1440px',
				desktop: '1441px'
			}
		}
	},

	plugins: []
};
