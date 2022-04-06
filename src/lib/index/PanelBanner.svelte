<script lang="ts">
	import Button from '$lib/Button/Button.svelte';

	import Container from '$lib/Container.svelte';
	import PlusColors from '$lib/svgs/plus-colors.svg';

	const panels = [
		{
			graphic: '',
			title: 'Best-in-class outcomes',
			body: 'Our personalized care plans reduce length of stay, appointment cancellations, surgical complications, and hospital readmissions.'
		},
		{
			graphic: '',
			title: 'Lower costs',
			body: 'We manage administrative tasks and routine care so your team always operates at the top-of-license.'
		},
		{
			graphic: '',
			title: 'Enhanced patient experience',
			body: 'We make patients feel connected, informed, and empowered along every step of their journey.'
		},
		{
			graphic: '',
			title: 'Improved provider satisfaction',
			body: 'Our technology helps clinicians spend less time on computers and more time with patients.'
		}
	];
</script>

<div class="flex items-center py-16">
	<Container>
		<div class="flex flex-col items-center justify-center mb-16">
			<h1 class="text-4xl font-semibold text-center mb-4">We help you scale value-based care.</h1>
			<PlusColors height="2rem" />
		</div>
		<div class="grid grid-cols-2 gap-24 px-16 mb-16">
			{#each panels as panel}
				<div class="flex gap-8">
					<div class="flex-none bg-cloud h-16 w-16">
						{panel.graphic}
					</div>
					<div>
						<h4 class="font-semibold text-2xl mb-2">{panel.title}</h4>
						<p class="text-grey600 text-lg">{panel.body}</p>
					</div>
				</div>
			{/each}
		</div>
		<Button color="cardinal" classes="mx-auto">Contact Us</Button>
	</Container>
</div>
