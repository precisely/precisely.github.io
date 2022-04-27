<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	const team = [
		{
			image: 'imgs/linda.webp',
			name: 'Linda Avey',
			title: 'Co-founder & CEO'
		},
		{
			image: 'imgs/aneil.webp',
			name: 'Aneil Mallavarapu, PhD',
			title: 'Co-founder & CTO'
		}
	];
</script>

<section class="flex items-center py-16">
	<Container>
		<h1 class="font-semibold text-4xl mb-16 text-center">Our Team</h1>

		<div class="flex justify-center gap-16">
			{#each team as member}
				<div class="flex flex-col items-center">
					<img
						class="rounded-lg w-96 h-96 mb-8 object-cover"
						src={member.image}
						alt={member.name}
					/>
					<h4 class="text-2xl font-semibold mb-1">{member.name}</h4>
					<p class="text-grey600">{member.title}</p>
				</div>
			{/each}
		</div>
	</Container>
</section>
