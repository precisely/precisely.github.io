<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import './joinBanner.css';
</script>

<Section>
	<Container>
		<div class="relative w-full h-full overflow-x-hidden rounded-xl bg-darkBlue p-16">
			<div class="absolute top-0 left-0 right-0 bottom-0 cta-circle" />
			<div class="relative flex flex-col z-10">
				<h1 class="content-4xl text-coconut mb-8 text-center">Join us today</h1>
				<p class="content-xl text-cloud mb-16 text-center">
					Become part of the next generation of digital health
				</p>
				<a sveltekit:prefetch href={'/contact'}>
					<Button color="cardinal" classes="mx-auto">Join our team</Button>
				</a>
			</div>
		</div>
	</Container>
</Section>
