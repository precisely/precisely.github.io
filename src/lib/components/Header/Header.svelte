<script lang="ts">
	import Logo from '$lib/svgs/logo/black.svg';
	import Container from '$lib/components/Container.svelte';
	import HeaderLink from './HeaderLink.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	let offset = 0;
</script>

<svelte:window bind:scrollY={offset} />

<header
	class={`fixed flex items-center h-[88px] w-full top-0 transition z-10 ${
		offset > 0 ? 'bg-white' : ''
	}`}
>
	<Container>
		<div class="flex items-center justify-between">
			<a sveltekit:prefetch href="/" class="inline-block h-8">
				<Logo />
			</a>
			<ul class="flex items-center gap-16">
				<HeaderLink pathname="/about">About</HeaderLink>
				<HeaderLink pathname="/contact">
					<Button color="cardinal">Contact</Button>
				</HeaderLink>
			</ul>
		</div>
	</Container>
</header>
