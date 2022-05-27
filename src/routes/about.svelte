<script lang="ts">
	import CtaBanner from '$lib/about/CtaBanner/CtaBanner.svelte';
	import MissionBanner from '$lib/about/MissionBanner/MissionBanner.svelte';
	import TeamBanner from '$lib/about/TeamBanner/TeamBanner.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Section>
	<Container>
		<h1 class="content-5xl text-center text-ink">
			At Precisely, we're re-writing the future for care delivery, patient experience, and health
			outcomes.
		</h1>
	</Container>
</Section>
<MissionBanner />
<TeamBanner />
<CtaBanner />
