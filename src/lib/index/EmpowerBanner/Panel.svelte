<script lang="ts">
	export let title: string;
</script>

<div class="flex flex-col items-center max-w-sm">
	<div class="mb-8 w-24 h-24">
		<slot name="graphic" />
	</div>
	<h4 class="content-3xl-sb mb-2 text-ink">{title}</h4>
	<p class="content-xl text-center text-grey700">
		<slot />
	</p>
</div>
