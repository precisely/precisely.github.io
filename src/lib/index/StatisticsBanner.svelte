<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Escutcheon from '$lib/svgs/escutcheon/any.svg';
	import colors from '$lib/utils/colors';

	const stats = [
		{ a: '1 Day', b: 'shorter inpatient stay', c: 'azure' },
		{ a: '$3,200', b: 'cost savings per patient', c: 'cardinal' },
		{
			a: '50%',
			b: 'reduction in same-day cancellations',
			c: 'parakeet'
		}
	];
</script>

<section id="statistics" class="flex items-center py-32 statistics-gradient">
	<Container>
		<div class="flex flex-col items-center justify-between">
			<h1 class="font-semibold text-5xl mb-4">Improve outcomes. Reduce costs.</h1>
			<p class="text-grey600 text-xl mb-8">Our best-in-class surgical care platform</p>
			<div class="flex gap-2 mb-24">
				{#each stats as stat}
					<Escutcheon height={'.75rem'} fill={colors[stat.c]} />
				{/each}
			</div>
			<div class="flex justify-around w-full">
				{#each stats as stat}
					<div class="flex-1 flex flex-col items-center max-w-xs px-16">
						<h4 class={`font-bold text-6xl  mb-4`} style={`color:${colors[stat.c]};`}>
							{stat.a}
						</h4>
						<p class="text-grey600 text-lg text-center">{stat.b}</p>
					</div>
				{/each}
			</div>
		</div>
	</Container>
</section>
