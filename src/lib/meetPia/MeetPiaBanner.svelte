<script lang="ts">
	import BlockDivider from '$lib/components/BlockDivider.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section>
	<Container>
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<div class="flex-1 flex items-center justify-center md:mr-8 mb-8 md:mb-0">
				<img
					class="h-[320px] md:h-[456px] lg:h-[500px] object-contain"
					src="./imgs/graphics/meetPia/meetPia.svg"
					alt="Meet PIA"
				/>
			</div>
			<div class="flex flex-col max-w-lg md:max-w-md lg:max-w-lg">
				<h1 class="content-6xl text-ink mb-4">Meet PIA</h1>
				<BlockDivider classes="bg-cardinal mb-8" />
				<p class="font-base content-xl text-grey700 mb-16">
					PIA (Precisely Intelligent Assistant) improves clinical efficiency and enhances patient
					experience.
				</p>
				<a sveltekit:prefetch href={'/contact'}>
					<Button color="cardinal">Get in Touch</Button>
				</a>
			</div>
		</div>
	</Container>
</Section>
