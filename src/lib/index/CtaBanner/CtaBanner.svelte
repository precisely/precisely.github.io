<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';

	import './ctaBanner.css';
</script>

<Section classes="bg-cloud">
	<div class="absolute top-0 left-0 right-0 bottom-0 cta-line-dot" />
	<Container classes="z-10">
		<div class="flex flex-col items-center justify-center">
			<h1 class="content-4xl text-center mb-8 text-ink">
				Every patient is unique.<br />
				Their care should be too.
			</h1>
			<p class="content-xl text-center mb-16 text-grey700">
				Get started with the scalable solution for value-based care today!
			</p>
			<a sveltekit:prefetch href={'/contact'}>
				<Button color="cardinal">Contact Us</Button>
			</a>
		</div>
	</Container>
</Section>
