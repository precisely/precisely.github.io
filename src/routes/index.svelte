<script context="module" lang="ts">
	import LandingBanner from '$lib/index/LandingBanner/LandingBanner.svelte';
	import TimelineBanner from '$lib/index/TimelineBanner/TimelineBanner.svelte';
	// import TestimonialBanner from '$lib/index/TestimonialBanner/TestimonialBanner.svelte';
	import PanelBanner from '$lib/index/PanelBanner/PanelBanner.svelte';
	import CtaBanner from '$lib/index/CtaBanner/CtaBanner.svelte';
	import EmpowerBanner from '$lib/index/EmpowerBanner/EmpowerBanner.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Precisely Health | Personalized Perioperative Care"
	description="Orchestrate surgical care journeys and deploy evidence-based best practices at scale."
/>

<LandingBanner />
<PanelBanner />
<TimelineBanner />
<EmpowerBanner />
<!-- <TestimonialBanner /> -->
<CtaBanner />
