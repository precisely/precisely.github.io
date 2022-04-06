<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/svgs/logo/full-red-black.svg';
	import Container from '$lib/Container.svelte';

	let offset = 0;
</script>

<svelte:window bind:scrollY={offset} />

<header
	class={`fixed flex items-center h-20 w-full top-0 transition z-10 ${
		offset > 0 ? 'bg-white' : ''
	}`}
>
	<Container>
		<div class="flex items-center justify-between">
			<a sveltekit:prefetch href="/" class="inline-block h-7">
				<Logo />
			</a>
			<ul class="flex gap-16">
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about" class="text-lg">About</a>
				</li>
				<li class:active={$page.url.pathname === '/contact'}>
					<a sveltekit:prefetch href="/contact" class="text-lg">Contact</a>
				</li>
			</ul>
		</div>
	</Container>
</header>
