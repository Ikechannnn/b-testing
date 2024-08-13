<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register the ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	let revealText;

	let columns = $state(4);

	// Function to update columns based on screen size
	function updateColumns() {
		const width = window.innerWidth;

		if (width >= 1441) {
			columns = 12;
		} else if (width >= 1440) {
			columns = 12;
		} else if (width >= 1024) {
			columns = 12;
		} else if (width >= 640) {
			columns = 8;
		} else {
			columns = 4;
		}
	}

	$effect(() => {
		updateColumns();
		window.addEventListener('resize', updateColumns);

		// Clean up event listener on component destroy
		return () => {
			window.removeEventListener('resize', updateColumns);
		};

		// const spans = document.querySelectorAll('.revealText span');
		// spans.forEach((span) => {
		// 	gsap.from(span, {
		// 		scrollTrigger: {
		// 			trigger: span,
		// 			start: 'top 80%',
		// 			end: 'bottom 20%',
		// 			scrub: true,
		// 			markers: true
		// 		},
		// 		opacity: 0,
		// 		y: 50,
		// 		duration: 1
		// 	});
		// });
	});
</script>

<div class="grid-ctn z-[-1] h-full w-full">
	<div class="columns h-full w-full">
		{#each Array(columns).fill(0) as _, index}
			<div class="grid-item col-span-1 h-full text-center text-base font-bold">Col{index + 1}</div>
		{/each}
	</div>
</div>

<!-- <div class=" grid-ctn z-10">
	<div class="columns">
		<div
			class="col-span-2 col-start-2 text-[#F8F8F8] mobile:col-span-2 mobile:col-start-2 tablet:col-span-3 tablet:col-start-2 laptop:col-span-3 laptop:col-start-3"
		>
			<p class="text-center font-serif text-[96px] font-bold leading-none tablet:text-left">
				20<span class=" text-[64px] font-bold">&nbsp%</span>
			</p>
			<p class="text-center text-[18px] tablet:text-left">
				of all vertebrate species are at risk of extinction in the wild.
			</p>
		</div>

		<div
			class="col-span-4 col-start-1 h-[90vh] w-full content-center border-2 text-[#F8F8F8] mobile:col-span-4 mobile:col-start-1 tablet:col-span-4 tablet:col-start-2 laptop:col-span-4 laptop:col-start-3"
		>
			<p
				class="revealText text-center font-sans text-[1.5rem] font-normal leading-[2rem] tracking-[-0.021rem] tablet:text-left"
				bind:this={revealText}
			>
				<span>Expanding from a maximum of 40 species</span>
				<span>to 2584 species. </span>
				<span>The number of species included in the model is larger by a factor of 64.6.</span>
			</p>
		</div>
	</div>
</div>
<div class="h-[100vh] w-full bg-black"></div> -->

<style>
	.grid-item {
		@apply bg-[#5d5d5d];
	}
</style>
