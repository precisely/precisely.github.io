<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';
	import Section from '$lib/components/Section.svelte';
	import Panel from './Panel.svelte';
</script>

<Section classes="bg-puff/50">
	<Container>
		<div class="flex flex-col items-center">
			<ScrollAnimate>
				<h1 class="content-4xl text-ink mb-8 text-center">Best-in-class personalization</h1>
			</ScrollAnimate>
			<ScrollAnimate>
				<p class="content-xl text-grey700 max-w-2xl mb-16 text-center">
					Powered by our patented precision automation technology, PIA's Five-Pillar Care
					Plans&trade; ensure every patient receives exceptional evidence-based, patient-centered
					care.
				</p>
			</ScrollAnimate>

			<div class="flex flex-row flex-wrap justify-around gap-16 xl:max-w-none max-w-2xl">
				<Panel
					img="./imgs/graphics/meetPia/pillars/lifestyleModification.svg"
					title="Lifestyle Modification"
				/>
				<Panel img="./imgs/graphics/meetPia/pillars/mentalHealth.svg" title="Mental Health" />
				<Panel img="./imgs/graphics/meetPia/pillars/targetedTherapy.svg" title="Targeted Therapy" />
				<Panel
					img="./imgs/graphics/meetPia/pillars/educationalResources.svg"
					title="Educational Resources"
				/>
				<Panel
					img="./imgs/graphics/meetPia/pillars/medicalOptimization.svg"
					title="Medical Optimization"
				/>
			</div>
		</div>
	</Container>
</Section>
