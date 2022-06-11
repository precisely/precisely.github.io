<script lang="ts">
	export let classes: string = '';
	export let id: string | null = null;
</script>

<section {id} class={`relative flex items-center py-24 md:py-32 ${classes}`}>
	<slot />
</section>
