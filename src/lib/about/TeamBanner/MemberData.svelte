<script lang="ts">
	export let src: string;
	export let name: string;
	export let title: string;
</script>

<div class="mb-6">
	<img class="h-64 w-64 rounded-lg object-cover" {src} alt={name} />
</div>
<h4 class="content-2xl-sb mb-2 text-ink">{name}</h4>
<p class="content-xl text-grey700">{title}</p>
