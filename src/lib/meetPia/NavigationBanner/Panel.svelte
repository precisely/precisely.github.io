<script lang="ts">
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';

	export let img: string;
	export let title: string;
</script>

<ScrollAnimate>
	<div class="flex flex-col items-center max-w-xs md:max-w-sm lg:max-w-md">
		<img class="max-w-sm object-contain mb-8" src={img} alt={title} />
		<h2 class="content-3xl-sb text-ink mb-4 text-center">{title}</h2>
		<p class="content-xl text-grey700 text-center">
			<slot />
		</p>
	</div>
</ScrollAnimate>
