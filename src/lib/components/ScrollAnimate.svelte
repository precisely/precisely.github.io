<script lang="ts">
	import scrollTrigger from '$lib/actions/scrollTrigger';
	import { tweened } from 'svelte/motion';
	import { fade, fromBottom } from '$lib/utils/animations';
	import { cubicInOut } from 'svelte/easing';

	const alpha = tweened(0, { duration: 300, easing: cubicInOut });

	const onEnter = () => {
		console.log('enter');
		alpha.set(1);
	};

	const onExit = () => {
		console.log('exit');
		// alpha.set(0);
	};
</script>

<span use:scrollTrigger={{ onEnter, onExit }} style={fade($alpha)}>
	<slot />
</span>
