<script lang="ts">
	import scrollTrigger from '$lib/actions/scrollTrigger';
	import { tweened } from 'svelte/motion';
	import { fade, fromRight } from '$lib/utils/animations';
	import { cubicInOut } from 'svelte/easing';

	interface Item {
		graphic: string;
		title: string;
		body: string;
	}

	const alpha = tweened(0, { duration: 300, easing: cubicInOut });

	const onEnter = () => {
		alpha.set(1);
	};

	const onExit = () => {
		// alpha.set(0);
	};

	export let i: number;
	export let obj: Item;
</script>

<div
	class="flex justify-center items-center w-12 h-12 border-2 border-alice rounded text-lg font-semibold bg-white my-16"
	style={fade($alpha)}
>
	{i + 1}
</div>
<div
	class="flex gap-8 ml-8 my-16"
	use:scrollTrigger={{ onEnter, onExit }}
	style={fromRight($alpha)}
>
	<div class="flex-none bg-cloud h-72 w-72">
		{obj.graphic}
	</div>
	<div class="flex flex-col">
		<h4 class="text-2xl font-semibold mb-4">{obj.title}</h4>
		<p class="text-grey600 text-lg">{obj.body}</p>
	</div>
</div>
