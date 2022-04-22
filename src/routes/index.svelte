<script context="module" lang="ts">
	import '$lib/index/index.css';

	import LandingBanner from '$lib/index/LandingBanner.svelte';
	import StatisticsBanner from '$lib/index/StatisticsBanner.svelte';
	import TimelineBanner from '$lib/index/TimelineBanner/TimelineBanner.svelte';
	import TestimonialBanner from '$lib/index/TestimonialBanner.svelte';
	import PanelBanner from '$lib/index/PanelBanner.svelte';
	import CtaBanner from '$lib/index/CtaBanner.svelte';
</script>

<svelte:head>
	<title>Precise.ly</title>
</svelte:head>

<LandingBanner />
<StatisticsBanner />
<TimelineBanner />
<PanelBanner />
<TestimonialBanner />
<CtaBanner />
