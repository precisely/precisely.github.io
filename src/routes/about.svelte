<script lang="ts">
	import JoinBanner from '$lib/about/JoinBanner/JoinBanner.svelte';
	import MissionBanner from '$lib/about/MissionBanner/MissionBanner.svelte';
	import TeamBanner from '$lib/about/TeamBanner/TeamBanner.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>About Us | Precisely</title>
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
<JoinBanner />
