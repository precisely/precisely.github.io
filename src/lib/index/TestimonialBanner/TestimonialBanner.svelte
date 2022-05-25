<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	import Container from '$lib/components/Container.svelte';
	import ChevronRight from '$lib/svgs/icons/patient/chevron-right.svg';
	import ChevronLeft from '$lib/svgs/icons/patient/chevron-left.svg';
	import Escutcheon from '$lib/svgs/escutcheon/any.svg';
	import QuoteLeftSvg from './quote-left.svg';

	import colors from '$lib/utils/colors';
	import Section from '$lib/components/Section.svelte';
	import Testimonial from './Testimonial.svelte';

	const testimonials = [
		{
			image: 'imgs/don.png',
			quote: "Look, I'm not making this sh*t up.",
			name: 'Don Turner',
			title: 'CEO, Neosinus Health'
		},
		{
			image: 'imgs/don.png',
			quote: 'B',
			name: 'Don Turner',
			title: 'CEO, Neosinus Health'
		},
		{
			image: 'imgs/don.png',
			quote: 'C',
			name: 'Don Turner',
			title: 'CEO, Neosinus Health'
		}
	];

	let selected = 0;
	let offset = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	function goRight() {
		select((selected + 1) % testimonials.length);
	}

	function goLeft() {
		select((selected + (testimonials.length - 1)) % testimonials.length);
	}

	function select(i: number) {
		selected = i;
		offset.set(selected * 100);
	}
</script>

<Section>
	<Container>
		<div class="relative w-full h-full overflow-x-hidden flex rounded-xl bg-darkBlue py-16">
			{#each testimonials as obj}
				<Testimonial offset={$offset} {...obj} />
			{/each}
			<div class="absolute right-6 top-4 h-12">
				<QuoteLeftSvg />
			</div>
			<div class="absolute right-4 bottom-4 flex gap-2">
				<button
					class="flex items-center justify-center hover:bg-white/10 transition-all"
					on:click={goLeft}
				>
					<ChevronLeft width={'2rem'} color={'white'} />
				</button>
				<button
					class="flex items-center justify-center hover:bg-white/10 transition-all"
					on:click={goRight}
				>
					<ChevronRight width={'2rem'} color={'white'} />
				</button>
			</div>
		</div>
	</Container>
</Section>
