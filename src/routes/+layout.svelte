<script>
	import '../app.css';
	import '@fontsource-variable/source-serif-4';
	import '@fontsource-variable/source-serif-4/opsz-italic.css';
	import 'non.geist';

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	// import { smoothScroll } from '../lib/utils/lenis';

	let { children } = $props();

	// onMount(() => {
	// 	if (browser) {
	// 		smoothScroll();
	// 	}
	// });
</script>

{@render children()}

<style>
	:global(html.lenis, html.lenis body) {
		height: auto;
	}
	:global(.lenis.lenis-smooth) {
		scroll-behavior: auto !important;
	}
	:global(.lenis.lenis-smooth [data-lenis-prevent]) {
		overscroll-behavior: contain;
	}
	:global(.lenis.lenis-stopped) {
		overflow: hidden;
	}
	:global(.lenis.lenis-smooth iframe) {
		pointer-events: none;
	}
</style>
