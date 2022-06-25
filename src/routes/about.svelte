<script lang="ts">
	import JoinBanner from '$lib/about/JoinBanner/JoinBanner.svelte';
	import MissionBanner from '$lib/about/MissionBanner/MissionBanner.svelte';
	import TeamBanner from '$lib/about/TeamBanner/TeamBanner.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="About Us | Precisely Health"
	description="We're a team of doctors, engineers and innovators"
/>

<Section>
	<Container>
		<div class="flex items-center justify-center">
			<h1 class="content-4xl text-center text-ink max-w-4xl">
				At Precisely, we're re-writing the future for care delivery, patient experience, and health
				outcomes.
			</h1>
		</div>
	</Container>
</Section>
<MissionBanner />
<TeamBanner />
<JoinBanner />
