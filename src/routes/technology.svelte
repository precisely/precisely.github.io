<script context="module" lang="ts">
	import Button from '$lib/components/Button/Button.svelte';

	import CtaBanner from '$lib/components/CtaBanner/CtaBanner.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import GetStartedBanner from '$lib/meetPia/GetStartedBanner/GetStartedBanner.svelte';
	import MeetPiaBanner from '$lib/meetPia/MeetPiaBanner.svelte';
	import ModularSolutionBanner from '$lib/meetPia/ModularSolutionBanner/ModularSolutionBanner.svelte';
	import NavigationBanner from '$lib/meetPia/NavigationBanner/NavigationBanner.svelte';
	import PillarsBanner from '$lib/meetPia/PillarsBanner/PillarsBanner.svelte';
</script>

<Seo
	title="Meet PIA | Precisely Health"
	description="Precisely Intelligent Assistant (PIA) improves clinical efficiency and patient outcomes."
/>

<MeetPiaBanner />
<NavigationBanner />
<ModularSolutionBanner />
<PillarsBanner />
<GetStartedBanner />
<CtaBanner>
	<span slot="title">Technology that's part of the team</span>
	Get started with the scalable solution for value-based care today!
	<span slot="button">
		<Button color="cardinal">Contact Sales Today</Button>
	</span>
</CtaBanner>
