<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import RedEscutcheon from '$lib/svgs/escutcheon/red.svg';
	import PolygonBackground from '$lib/PolygonBackground/PolygonBackground.svelte';
	import scrollTo from '$lib/actions/scrollTo';
	import GradientText from '$lib/components/GradientText/GradientText.svelte';
</script>

<section class="relative flex items-center py-16">
	<PolygonBackground />
	<Container classes="relative">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="font-semibold text-6xl mb-4">
					<GradientText>Precision health</GradientText> <br /> at scale.
				</h1>
				<div class="h-2 w-8 bg-cardinal mb-8" />
				<p class="text-grey600 text-xl mb-8">Deliver personalized, value-based care at scale.</p>
				<Button color="cardinal">Contact Us</Button>
			</div>
			<div class="bg-cloud h-96 w-96">graphic</div>
		</div>
		<div class="flex mt-16">
			<div
				class="flex flex-col items-center mx-auto hover:cursor-pointer p-2"
				use:scrollTo={'statistics'}
			>
				<span class="text-cardinal text-sm">Learn More</span>
				<div class="w-4 mt-2">
					<RedEscutcheon />
				</div>
			</div>
		</div>
	</Container>
</section>
