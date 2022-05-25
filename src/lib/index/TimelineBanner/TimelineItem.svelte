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

<TimelineGrid classes="mb-32">
	<div
		class="flex justify-center items-center w-12 h-12 border-2 border-alice pt-1 rounded-full content-xl font-bold border-cardinal bg-white"
		style={fade($alpha)}
	>
		{i}
	</div>
	<div class="flex gap-32" use:scrollTrigger={{ onEnter, onExit }} style={fade($alpha)}>
		<div class="flex-1 bg-cloud h-72 w-72">
			<slot name="graphic" />
		</div>
		<div class="max-w-md">
			<p class="content-subcategory mb-3">{category}</p>
			<h4 class="content-4xl text-ink mb-6">{title}</h4>
			<p class="content-xl text-grey700"><slot /></p>
		</div>
	</div>
</TimelineGrid>
