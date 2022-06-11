<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Panel from './Panel.svelte';

	import GlobeSvg from './globe.svg';
	import DollarSignSvg from './dollar-sign.svg';
	import UserSvg from './user.svg';
	import ProviderSvg from './provider.svg';

	import './missionBanner.css';
</script>

<Section classes="bg-peppermint pt-48">
	<div class="absolute top-0 mission-triangle left-1/2" />
	<Container>
		<h1 class="content-4xl text-ink text-center mb-8">Our Mission</h1>
		<p class="content-xl text-grey700 text-center mb-16">
			We're a tech company that puts people at the center of everything we do.
		</p>
		<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16 justify-center">
			<Panel title="Better outcomes">
				<span slot="graphic">
					<GlobeSvg />
				</span>
				Personalized, high-touch care that's accessible to diverse patients from all backgrounds and
				geographies
			</Panel>
			<Panel title="Lower costs">
				<span slot="graphic">
					<DollarSignSvg />
				</span>
				Coordinated care teams that ensure the most efficient, effective, and equitable allocation of
				system resources
			</Panel>
			<Panel title="Patient experience">
				<span slot="graphic">
					<UserSvg />
				</span>
				Equipping every patient with the tools and resources they need to reach their unique health goals
			</Panel>
			<Panel title="Provier wellness">
				<span slot="graphic">
					<ProviderSvg />
				</span>
				Automating routine tasks and documentation so clinical teams always operate at top-of-license
			</Panel>
		</div>
		<a sveltekit:prefetch href={'/contact'}>
			<Button color="cardinal mx-auto">Contact Us</Button>
		</a>
	</Container>
</Section>
