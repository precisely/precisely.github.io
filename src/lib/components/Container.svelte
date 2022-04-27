<script lang="ts">
	export let classes: string = '';
</script>

<div class={`flex justify-center w-full ${classes}`}>
	<div class="max-w-7xl container px-12">
		<slot />
	</div>
</div>
