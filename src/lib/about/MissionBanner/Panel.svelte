<script lang="ts">
	export let title: string;
</script>

<div class="flex-1 flex flex-col max-w-sm p-8 gap-4 bg-white rounded">
	<div class="h-16 w-16">
		<slot name="graphic" />
	</div>
	<h4 class="content-3xl-sb text-ink">{title}</h4>
	<p class="content-xl text-grey700"><slot /></p>
</div>
