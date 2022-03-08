<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<div class="h-[30px] w-[148px] mx-8 mb-14">
				<img src={logo} alt="logo" />
			</div>
		</a>
	</div>

	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>
