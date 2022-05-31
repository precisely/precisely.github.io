<script lang="ts">
	import { page } from '$app/stores';

	export let onClick: () => void = () => {};
	export let pathname: string;
</script>

<a
	sveltekit:prefetch
	href={pathname}
	class:active={$page.url.pathname === pathname}
	class="header-link"
	on:click={onClick}
>
	<slot />
</a>
