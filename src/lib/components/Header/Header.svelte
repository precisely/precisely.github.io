<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Logo from '$lib/svgs/logo/black.svg';
	import BarsSvg from './bars.svg';
	import './header.css';
	import HeaderLink from './HeaderLink.svelte';

	let offset = 0;

	let openMenu = false;

	function toggleMenu() {
		openMenu = !openMenu;
	}
</script>

<svelte:window bind:scrollY={offset} />

<header
	class={`fixed flex items-center h-[68px] md:h-[88px] w-full top-0 transition z-20 ${
		offset > 0 ? 'bg-white' : 'bg-white'
	}`}
>
	<Container>
		<div class="flex items-center justify-between">
			<a sveltekit:prefetch href="/" class="inline-block h-6 md:h-8">
				<Logo height="100%" />
			</a>
			<button class="md:hidden" on:click={toggleMenu}>
				<BarsSvg />
			</button>
			<!-- shown when screen size less than md -->
			<ul
				class={`absolute top-[68px] left-0 right-0 flex md:hidden flex-col ${
					openMenu ? 'h-[116px]' : 'h-0'
				} overflow-y-hidden transition-all menu-bg`}
			>
				<Container>
					<HeaderLink pathname="/technology" onClick={toggleMenu}>Technology</HeaderLink>
					<HeaderLink pathname="/about" onClick={toggleMenu}>About</HeaderLink>
					<HeaderLink pathname="/contact" onClick={toggleMenu}>Contact</HeaderLink>
				</Container>
			</ul>

			<!-- shown when screen size greater than md -->
			<ul class="hidden md:flex items-center gap-16">
				<HeaderLink pathname="/technology">Technology</HeaderLink>
				<HeaderLink pathname="/about">About</HeaderLink>
				<HeaderLink pathname="/contact">
					<Button color="cardinal">Contact</Button>
				</HeaderLink>
			</ul>
		</div>
	</Container>
</header>
