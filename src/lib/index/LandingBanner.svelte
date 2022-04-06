<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Button from '$lib/Button/Button.svelte';
	import RedEscutcheon from '$lib/svgs/escutcheon/red.svg';
</script>

<div class="flex items-center py-16">
	<Container>
		<div class="flex items-center justify-between">
			<div>
				<h1 class="font-semibold text-6xl mb-4">
					<span class="text-gradient">Precision health</span> <br /> for every patient.
				</h1>
				<div class="h-2 w-8 bg-cardinal mb-8" />
				<p class="text-grey600 text-xl mb-8">Deliver personalized, value-based care at scale.</p>
				<Button color="cardinal">Contact Us</Button>
			</div>
			<div class="bg-cloud h-96 w-96">graphic</div>
		</div>
		<div class="flex flex-col items-center mt-16">
			<span class="text-cardinal text-sm">Learn More</span>
			<div class="w-4 mt-2">
				<RedEscutcheon />
			</div>
		</div>
	</Container>
</div>
