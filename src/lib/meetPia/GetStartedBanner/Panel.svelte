<script lang="ts">
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';

	export let title: string;
</script>

<ScrollAnimate>
	<div class="flex flex-col items-center max-w-xs">
		<div class="mb-4 w-16 h-16">
			<slot name="graphic" />
		</div>
		<h4 class="content-3xl-sb mb-2 text-ink text-center">{title}</h4>
		<p class="content-xl text-center text-grey700">
			<slot />
		</p>
	</div>
</ScrollAnimate>
