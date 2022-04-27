<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Escutcheon from '$lib/svgs/escutcheon/any.svg';
	import colors from '$lib/utils/colors';
</script>

<div class="flex items-center py-16">
	<Container>
		<div class="relative">
			<div class="flex justify-center opacity-5">
				<Escutcheon fill={colors['azure']} height="12rem" />
				<Escutcheon fill={colors['cardinal']} height="12rem" class="mt-24" />
				<Escutcheon fill={colors['parakeet']} height="12rem" class="mt-48" />
			</div>
			<div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
				<h1 class="font-semibold text-4xl mb-4">
					Every patient is different. Their care should be too.
				</h1>
				<p class="text-grey600 text-xl mb-16">Start delivering personalized care at scale today.</p>
				<Button color="cardinal">Contact Us</Button>
			</div>
		</div>
	</Container>
</div>
