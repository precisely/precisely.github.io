<script lang="ts">
	import { onMount } from 'svelte';
	import { createWidget } from '@typeform/embed';
	import '@typeform/embed/build/css/widget.css';

	let formContainer: HTMLElement;

	onMount(async () => {
		createWidget('kiuLt1zP', { container: formContainer });
	});
</script>

<div class="w-full h-96" bind:this={formContainer} />
