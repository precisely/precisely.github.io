<script lang="ts">
	import Team from '$lib/about/Team.svelte';
	import Container from '$lib/components/Container.svelte';
	import GradientText from '$lib/components/GradientText/GradientText.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="flex items-center pt-32 pb-16">
	<div class="max-w-5xl mx-auto">
		<h1 class="font-semibold text-5xl mb-8 text-center">
			<GradientText>The definitive solution for value based care.</GradientText>
		</h1>
		<p class="text-2xl text-grey600 text-center">
			We are passionate about implementing technology that delivers improved patient outcomes while
			lessening the burden on care teams. Healthcare providers working top of license with
			prevention as a long-term goal. That's our mission.
		</p>
	</div>
</section>

<Team />
