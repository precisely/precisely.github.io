<script lang="ts">
	export let classes: string = '';
	export let id: string | null = null;
</script>

<section {id} class={`max-w-full relative flex items-center py-16 md:py-24 lg:py-32 ${classes}`}>
	<slot />
</section>
