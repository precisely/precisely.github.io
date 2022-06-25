<script lang="ts">
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';

	export let title: string;
</script>

<div class="flex gap-8 max-w-lg">
	<div class="flex-none flex items-center justify-center h-16 w-16">
		<slot name="graphic" />
	</div>
	<div class="flex-1">
		<h4 class="content-3xl-sb text-ink mb-2">{title}</h4>
		<p class="content-xl text-grey700">
			<slot />
		</p>
	</div>
</div>
