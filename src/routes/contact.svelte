<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Typeform from '$lib/contact/Typeform.svelte';
</script>

<svelte:head>
	<title>Contact Us | Precisely</title>
</svelte:head>

<Section>
	<Container>
		<div class="flex">
			<div class="max-w-md">
				<h1 class="content-6xl text-ink mb-8">Let's connect!</h1>
				<p class="content-xl text-grey700 mb-8">
					At Precisely, we believe that every patient deserves personalized, coordinated, and
					data-driven care. We're building the digital platform to power this reality.
				</p>
				<p class="content-xl text-grey700 mb-16">
					We'd love to chat and learn how we can work together to build a better healthcare system.
				</p>

				<Typeform />
			</div>
		</div>
	</Container>
</Section>
