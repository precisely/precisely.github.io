<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	import PolygonBackground from '$lib/index/LandingBanner/PolygonBackground/PolygonBackground.svelte';
	import scrollTo from '$lib/actions/scrollTo';
	import GradientText from '$lib/components/GradientText/GradientText.svelte';
	import Section from '$lib/components/Section.svelte';
	import BlockDivider from '$lib/components/BlockDivider.svelte';

	import ChevronDown from '$lib/svgs/icons/chevron-down.svg';
	import Placeholder from './placeholder.svg';

	import colors from '$lib/utils/colors';
</script>

<Section>
	<PolygonBackground />
	<Container classes="relative">
		<div class="flex flex-col md:flex-row items-center justify-between">
			<div class="max-w-xl">
				<h1 class="content-6xl mb-4">
					<GradientText>Improve outcomes.</GradientText> <br />
					Reduce costs.
				</h1>
				<BlockDivider classes="bg-cardinal mb-8" />
				<p class="font-base content-xl text-grey700 mb-16">
					Personalize surgical care journeys and deploy evidence-based best practices at scale
				</p>
				<Button color="cardinal">Request Demo</Button>
			</div>
			<div class="-m-32 h-[512px]">
				<Placeholder height="100%" />
			</div>
		</div>
	</Container>
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center mx-auto hover:cursor-pointer p-2"
		use:scrollTo={'statistics'}
	>
		<span class="text-cardinal content-xl mb-0.5">Our Platform</span>
		<ChevronDown height="32px" color={colors['cardinal']} />
	</div>
</Section>
