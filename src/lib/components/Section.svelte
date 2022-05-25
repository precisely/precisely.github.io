<script lang="ts">
	export let classes: string = '';
</script>

<section class={`relative flex items-center py-32 ${classes}`}>
	<slot />
</section>
