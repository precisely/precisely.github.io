<script lang="ts">
	import './input.css';

	export let label: string | null = null;
	export let name: string;
	export let placeholder: string = '';
	export let type: HTMLInputElement['type'] = 'text';
	export let required: boolean = false;
	export let value: string;
</script>

<div class="input-wrapper">
	{#if label !== null}
		<label class="content-label text-ink mb-2" for={name}>{label}</label>
	{/if}
	<!-- can't dynamically set type due to value binding -->
	{#if type === 'text'}
		<input class="input" {placeholder} {name} type="text" {required} bind:value />
	{:else if type === 'email'}
		<input class="input" {placeholder} {name} type="email" {required} bind:value />
	{/if}
</div>
