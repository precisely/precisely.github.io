<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	import PolygonBackground from '$lib/index/LandingBanner/PolygonBackground/PolygonBackground.svelte';
	import scrollTo from '$lib/actions/scrollTo';
	import GradientText from '$lib/components/GradientText/GradientText.svelte';
	import Section from '$lib/components/Section.svelte';
	import BlockDivider from '$lib/components/BlockDivider.svelte';

	import ChevronDown from '$lib/svgs/icons/chevron-down.svg';
	// import LandingGraphic from './landing.svg';

	import colors from '$lib/utils/colors';
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';
</script>

<Section>
	<PolygonBackground />
	<Container classes="relative">
		<div class="flex flex-col md:mb-16 md:flex-row items-center justify-between">
			<ScrollAnimate>
				<div class="max-w-xl mb-8 md:mb-0">
					<h1 class="content-6xl mb-4">
						<span class="whitespace-nowrap"><GradientText>Improve outcomes.</GradientText></span>
						<br />
						Reduce costs.
					</h1>
					<BlockDivider classes="bg-cardinal mb-8" />
					<p class="font-base content-xl text-grey700 mb-16">
						Personalize surgical care journeys and deploy evidence-based best practices at scale.
					</p>
					<a sveltekit:prefetch href={'/contact'}>
						<Button color="cardinal">Request Demo</Button>
					</a>
				</div>
			</ScrollAnimate>
			<ScrollAnimate>
				<div class="md:ml-8">
					<!-- <LandingGraphic height="100%" width="100%" /> -->
					<img
						class="h-96 md:w-[456px] lg:h-[512px] lg:w-auto object-contain"
						src="./imgs/graphics/landing.svg"
						alt="Doctor with patient"
					/>
				</div>
			</ScrollAnimate>
		</div>
	</Container>
	<ScrollAnimate>
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center mx-auto hover:cursor-pointer p-2"
			use:scrollTo={'panel-banner'}
		>
			<span class="text-cardinal content-xl mb-0.5">Our Platform</span>
			<ChevronDown height="32px" color={colors['cardinal']} />
		</div>
	</ScrollAnimate>
</Section>
