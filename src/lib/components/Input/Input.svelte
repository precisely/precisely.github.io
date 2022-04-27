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
		<label class="label" for={name}>{label}</label>
	{/if}
	<input class="input" {placeholder} {name} {type} {required} {value} />
</div>
