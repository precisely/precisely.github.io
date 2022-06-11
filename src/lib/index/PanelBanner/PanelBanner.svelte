<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';

	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import PlusColors from '$lib/svgs/plus-colors.svg';
	import Panel from './Panel.svelte';

	import HandsHeartSvg from './hands-heart.svg';
	import FilesSvg from './files.svg';
	import ChartSvg from './chart.svg';
	import ProviderSvg from './provider.svg';
</script>

<Section id="panel-banner" classes="bg-peppermint">
	<Container>
		<div class="flex flex-col items-center justify-center mb-16">
			<h1 class="content-4xl text-center mb-8">
				The technology-driven solution for value-based care
			</h1>
			<PlusColors height="2rem" />
		</div>
		<div class="flex flex-col items-center md:grid md:grid-cols-2 gap-16 mb-16">
			<Panel title="Best-in-class patient outcomes">
				<span slot="graphic">
					<HandsHeartSvg />
				</span>
				Personalize care plans to reduce length of stay, same-day cancellations, post-surgical complications,
				and readmissions.
			</Panel>
			<Panel title="Industry-leading cost savings">
				<span slot="graphic">
					<ChartSvg />
				</span>
				Automate routine tasks and guide patients to the appropriate venue of care, optimizing resources
				allocation and system utilization.
			</Panel>
			<Panel title="Premium patient experience">
				<span slot="graphic">
					<FilesSvg />
				</span>
				Empower patient with the tools and resources to feel connected, informed, and in control along
				every step of their healthcare journey.
			</Panel>
			<Panel title="Improved provider satisfaction">
				<span slot="graphic">
					<ProviderSvg />
				</span>
				Our technology helps clinicians spend less time charting on computers and more time caring for
				patients.
			</Panel>
		</div>
		<a sveltekit:prefetch href={'/contact'}>
			<Button color="cardinal" classes="mx-auto">Contact Us</Button>
		</a>
	</Container>
</Section>
