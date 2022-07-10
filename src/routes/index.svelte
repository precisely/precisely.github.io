<script context="module" lang="ts">
	import LandingBanner from '$lib/index/LandingBanner/LandingBanner.svelte';
	import TimelineBanner from '$lib/index/TimelineBanner/TimelineBanner.svelte';
	// import TestimonialBanner from '$lib/index/TestimonialBanner/TestimonialBanner.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import CtaBanner from '$lib/components/CtaBanner/CtaBanner.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import EmpowerBanner from '$lib/index/EmpowerBanner/EmpowerBanner.svelte';
	import PanelBanner from '$lib/index/PanelBanner/PanelBanner.svelte';
</script>

<Seo
	title="Precisely Health | Orchestrate Perioperative Care"
	description="Personalize surgical care journeys and deploy evidence-based best practices at scale."
/>

<LandingBanner />
<PanelBanner />
<TimelineBanner />
<EmpowerBanner />
<!-- <TestimonialBanner /> -->
<CtaBanner>
	<span slot="title">
		Every patient is unique.<br />
		Their care should be too.
	</span>
	Get started with the scalable solution for value-based care today!
	<span slot="button">
		<Button color="cardinal">Contact Us</Button>
	</span>
</CtaBanner>
