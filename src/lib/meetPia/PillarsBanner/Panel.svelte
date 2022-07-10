<script lang="ts">
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';

	export let img: string;
	export let title: string;
</script>

<ScrollAnimate>
	<div class="flex flex-col w-32 m-4">
		<img class="h-32 w-32 object-contain mb-4" src={img} alt={title} />
		<h4 class="content-2xl-sb text-ink text-center">{title}</h4>
	</div>
</ScrollAnimate>
