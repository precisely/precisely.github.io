<script lang="ts">
	import './input.css';

	export let label: string | null = null;
	export let name: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let value: string;
	export let rows: number = 4;
</script>

<div class="input-wrapper">
	{#if label !== null}
		<label class="content-label text-ink mb-2" for={name}>{label}</label>
	{/if}
	<textarea class="input" {placeholder} {name} {required} {rows} bind:value />
</div>
