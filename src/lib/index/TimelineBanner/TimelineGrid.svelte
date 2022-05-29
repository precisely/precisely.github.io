<script lang="ts">
	export let classes: string = '';
</script>

<div class={`flex relative md:gap-16 ${classes}`}>
	<div class="hidden md:block w-12">
		<slot name="lead" />
	</div>
	<div class="flex-1">
		<slot />
	</div>
</div>
