<script lang="ts">
	import scrollTrigger from '$lib/actions/scrollTrigger';
	import { tweened } from 'svelte/motion';
	import { fade, fromRight } from '$lib/utils/animations';
	import { cubicInOut } from 'svelte/easing';
	import TimelineGrid from './TimelineGrid.svelte';

	const alpha = tweened(0, { duration: 300, easing: cubicInOut });

	const onEnter = () => {
		console.log('enter');
		alpha.set(1);
	};

	const onExit = () => {
		console.log('exit');
	};

	export let i: number;
	export let category: string;
	export let title: string;
</script>

<TimelineGrid classes="mb-16 md:mb-32">
	<span slot="lead">
		<div
			class="flex justify-center items-center w-12 h-12 border-2 border-alice pt-1 rounded-full content-xl font-bold border-cardinal bg-white"
			style={fade($alpha)}
		>
			{i}
		</div>
	</span>

	<div
		class="flex flex-col md:flex-row justify-between gap-8 md:gap-16"
		use:scrollTrigger={{ onEnter, onExit }}
		style={fade($alpha)}
	>
		<div class="flex-none md:w-96 lg:w-[456px]">
			<slot name="graphic" />
		</div>
		<div class="md:max-w-md">
			<p class="content-subcategory mb-3">{category}</p>
			<h4 class="content-4xl text-ink mb-6">{title}</h4>
			<p class="content-xl text-grey700"><slot /></p>
		</div>
	</div>
</TimelineGrid>
