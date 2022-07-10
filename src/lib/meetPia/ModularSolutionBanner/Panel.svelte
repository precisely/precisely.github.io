<script lang="ts">
	export let category: string;
	export let title: string;
</script>

<div class="flex flex-col max-w-lg">
	<div class="flex flex-row gap-8 mb-6">
		<div class="flex-none flex items-center justify-center h-16 w-16">
			<slot name="graphic" />
		</div>

		<div class="flex flex-col">
			<p class="content-subcategory mb-3">{category}</p>
			<h4 class="content-3xl-sb text-ink">{title}</h4>
		</div>
	</div>
	<p class="content-xl text-grey700">
		<slot />
	</p>
</div>
