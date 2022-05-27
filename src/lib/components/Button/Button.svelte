<script lang="ts">
	import './button.css';

	export let size: 'regular' | 'slim' = 'regular';
	export let color: string = 'ink';
	export let classes: string = '';
	export let disabled: boolean = false;
	export let onClick: () => void = () => {};
</script>

<button class={`btn btn-${color} btn-${size} content-lg-b ${classes}`} {disabled} {onClick}>
	<slot />
</button>
