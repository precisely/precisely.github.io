<script context="module" lang="ts">
	import LandingBanner from '$lib/index/LandingBanner/LandingBanner.svelte';
	import TimelineBanner from '$lib/index/TimelineBanner/TimelineBanner.svelte';
	// import TestimonialBanner from '$lib/index/TestimonialBanner/TestimonialBanner.svelte';
	import PanelBanner from '$lib/index/PanelBanner/PanelBanner.svelte';
	import CtaBanner from '$lib/index/CtaBanner/CtaBanner.svelte';
	import EmpowerBanner from '$lib/index/EmpowerBanner/EmpowerBanner.svelte';
</script>

<svelte:head>
	<title>Precisely</title>
	<meta name="description" content="Place the meta description text here." />

	<!-- To generate the preview when linking on social media -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.precise.ly/" />

	<!-- <meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:site_name" content="" />
	<meta property="og:image" content="" /> -->
</svelte:head>

<LandingBanner />
<PanelBanner />
<TimelineBanner />
<EmpowerBanner />
<!-- <TestimonialBanner /> -->
<CtaBanner />
