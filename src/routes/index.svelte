<script context="module" lang="ts">
	import '$lib/index/index.css';

	import LandingBanner from '$lib/index/LandingBanner/LandingBanner.svelte';
	import TimelineBanner from '$lib/index/TimelineBanner/TimelineBanner.svelte';
	import TestimonialBanner from '$lib/index/TestimonialBanner/TestimonialBanner.svelte';
	import PanelBanner from '$lib/index/PanelBanner/PanelBanner.svelte';
	import CtaBanner from '$lib/index/CtaBanner/CtaBanner.svelte';
	import EmpowerBanner from '$lib/index/EmpowerBanner/EmpowerBanner.svelte';
</script>

<svelte:head>
	<title>Precise.ly</title>
</svelte:head>

<LandingBanner />
<PanelBanner />
<TimelineBanner />
<EmpowerBanner />
<TestimonialBanner />
<CtaBanner />
