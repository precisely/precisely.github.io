<script>
	import Container from '$lib/Container.svelte';
	import ChevronRight from '$lib/svgs/icons/patient/chevron-right.svg';
	import ChevronLeft from '$lib/svgs/icons/patient/chevron-left.svg';
	import Escutcheon from '$lib/svgs/escutcheon/any.svg';

	import colors from '$lib/utils/colors';

	const testimonials = [
		{
			image: 'imgs/don.png',
			quote: "Look, I'm not making this sh*t up.",
			name: 'Don Turner',
			title: 'CEO, Neosinus Health'
		}
	];
</script>

<div class="flex items-center py-16">
	<Container>
		<div class="relative w-full">
			{#each testimonials as obj}
				<div class="relative w-[inherit] rounded-xl bg-mountain px-16 text-white h-72">
					<div class="absolute left-4 top-0 h-full">
						<Escutcheon fill={colors['indigo']} height="100%" />
					</div>
					<div class="relative flex items-center pl-16 h-full gap-16 py-16">
						<img class="rounded-xl overflow-hidden w-48 h-48" src={obj.image} alt={obj.name} />
						<div class="flex-1 flex flex-col h-full">
							<div class="flex mb-2 items-center w-full gap-2">
								<span class="flex-1 uppercase font-light text-parakeet text-sm">
									What Experts are Saying
								</span>
								<Escutcheon fill={colors['azure']} height="1rem" />
								<Escutcheon fill={colors['cardinal']} height="1rem" />
								<Escutcheon fill={colors['parakeet']} height="1rem" />
							</div>

							<blockquote class="flex-1 text-xl">"{obj.quote}"</blockquote>
							<span class="text-lg">{obj.name}</span>
							<span class="text-lg text-alice/50">{obj.title}</span>
						</div>
					</div>
				</div>
			{/each}

			<button
				class="absolute flex items-center justify-center left-0 top-0 bottom-0 w-16 hover:bg-white/10 transition-all"
			>
				<ChevronLeft width={'2rem'} color={'white'} />
			</button>
			<button
				class="absolute flex items-center justify-center right-0 top-0 bottom-0 w-16 hover:bg-white/10 transition-all"
			>
				<ChevronRight width={'2rem'} color={'white'} />
			</button>
			<div class="absolute bottom-0 left-0 right-0 h-10 flex justify-center items-center">
				{#each testimonials as obj, i}
					<div class="bg-white/20 h-3 w-3 rounded-full" />
				{/each}
			</div>
		</div>
	</Container>
</div>
