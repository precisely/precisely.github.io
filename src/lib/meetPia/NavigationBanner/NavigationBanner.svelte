<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';
	import Section from '$lib/components/Section.svelte';
	import Panel from './Panel.svelte';
</script>

<Section classes="bg-peppermint">
	<Container>
		<div class="flex flex-col items-center">
			<ScrollAnimate>
				<h1 class="content-4xl text-ink mb-8 text-center">Virtual Patient Navigation at Scale</h1>
			</ScrollAnimate>
			<ScrollAnimate>
				<p class="content-xl text-grey700 max-w-2xl mb-16 text-center">
					We keep patients and care teams in sync. PIA automatically deploys evidence-based best
					protocols from end-to-end, has rich interactions with patients and caregivers, and
					digitally coordinates operations across the entire care continuum.
				</p>
			</ScrollAnimate>

			<div class="flex flex-col md:flex-row mb-16 gap-8 md:gap-32">
				<Panel
					img="./imgs/graphics/meetPia/streamlineWorkflows.svg"
					title="Streamline your workflows"
				>
					PIA's sophisticated automation technology handles routine care and documentation, so your
					teams can focus their time where it matters most.
				</Panel>

				<Panel img="./imgs/graphics/meetPia/meetPatients.svg" title="Meet patients where they are">
					PIA extends care beyond the hospital walls, delivering care plans that encompass each
					patient's condition, risks, social factors, and health goals.
				</Panel>
			</div>

			<a sveltekit:prefetch href={'/contact'}>
				<Button color="cardinal">Book a Demo</Button>
			</a>
		</div>
	</Container>
</Section>
