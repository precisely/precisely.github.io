<script lang="ts">
	import './gradientText.css';

	export let classes: string = '';
</script>

<span class={`text-gradient ${classes}`}><slot /></span>
