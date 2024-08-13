<script>
	import p5 from 'p5';
	import { onMount } from 'svelte';
	import Boid from '../utils/boid';

	let canvas;
	let { numOfBugs, numOfHighlightedBug, bgColor } = $props();
	let p5Instance;

	let indices = $derived.by(() => {
		if (numOfHighlightedBug > 0) {
			return Array.from({ length: numOfHighlightedBug }, (_, i) => i);
		} else {
			return [];
		}
	});

	// $inspect(indices);

	let sketch = (p) => {
		let swarm = $state([]);

		p.setup = () => {
			p.createCanvas(p.windowWidth, p.windowHeight);
			// for (let i = 0; i < numOfBugs; i++) {
			// 	swarm.push(new Boid(p));
			// }
		};

		p.draw = () => {
			// console.log(swarm.length);
			p.background(bgColor);
			updateNumOfBugs(numOfBugs);
			highlightRandomBoids(swarm, indices);

			swarm.forEach((bug) => {
				bug.edges();
				// bug.flocking(swarm);
				bug.update();
				bug.show();
			});
		};

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
		};

		const highlightRandomBoids = (array, indices) => {
			// Reset all previous highlights
			array.forEach((bug) => {
				bug.highlighted = false;
			});

			// Highlight bugs
			indices?.forEach((index) => {
				if (swarm[index]) {
					swarm[index].highlighted = true;
				}
			});
		};

		const updateNumOfBugs = (numOfBugs) => {
			let diff;
			let currenyArrLen = swarm.length;

			if (numOfBugs > currenyArrLen) {
				diff = numOfBugs - currenyArrLen;
				for (let i = 0; i < diff; i++) {
					swarm.push(new Boid(p));
				}
			} else if (numOfBugs < currenyArrLen) {
				diff = currenyArrLen - numOfBugs;
				for (let i = 0; i < diff; i++) {
					swarm.splice(-diff, diff);
				}
			} else {
				return;
			}
		};
	};

	onMount(() => {
		p5Instance = new p5(sketch, canvas);
	});
</script>

<div bind:this={canvas}></div>
