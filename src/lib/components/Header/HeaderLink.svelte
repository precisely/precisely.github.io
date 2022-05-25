<script lang="ts">
	import { page } from '$app/stores';

	export let pathname: string;
</script>

<li class:active={$page.url.pathname === pathname}>
	<a sveltekit:prefetch href={pathname} class="font-semibold text-xl text-ink">
		<slot />
	</a>
</li>
