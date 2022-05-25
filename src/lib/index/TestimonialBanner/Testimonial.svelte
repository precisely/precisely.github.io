<script lang="ts">
	import './testimonial.css';

	export let offset: number = 0;
	export let name: string;
	export let title: string;
	export let quote: string;
	export let image: string;
</script>

<div
	class="relative flex-none w-[inherit] h-full flex px-16 gap-16"
	style={`transform:translateX(-${offset}%)`}
>
	<div class="rounded-xl overflow-hidden w-48 h-48 image-shadow">
		<img src={image} alt={name} />
	</div>

	<div class="flex flex-col py-4">
		<blockquote class="flex-1 content-3xl text-coconut">{quote}</blockquote>
		<span class="text-lg text-coconut">{name}</span>
		<span class="text-lg text-coconut/75">{title}</span>
	</div>
</div>
