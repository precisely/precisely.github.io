<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Investor from './Investor.svelte';
</script>

<Section classes="py-0 md:py-0">
	<Container>
		<h1 class="content-3xl-sb text-ink text-center mb-16">
			Backed by the leaders in digital health
		</h1>
		<div class="flex flex-wrap justify-center gap-16">
			<Investor
				name="Hacking Medicine Venture Capital"
				src="imgs/investors/hackmed.png"
				link="https://hackmed.vc/"
			/>
			<Investor name="Schox" src="imgs/investors/schox.svg" link="https://www.schox.com/" />
			<Investor
				name="Rock Health Capital"
				src="imgs/investors/rockhealth.svg"
				link="https://rockhealth.com/"
			/>
			<Investor name="Voyagers" src="imgs/investors/voyagers.svg" link="https://voyagers.io/" />
			<Investor
				name="North South Ventures"
				src="imgs/investors/nsv.png"
				link="https://www.northsouthvc.com/"
			/>
		</div>
	</Container>
</Section>
