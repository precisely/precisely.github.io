<script lang="ts">
	export let name: string;
	export let src: string;
	export let link: string;
</script>

<a href={link} target="_blank">
	<img class="object-contain h-24" {src} alt={name} />
</a>
