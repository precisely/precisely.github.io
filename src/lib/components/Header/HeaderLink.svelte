<script lang="ts">
	import { page } from '$app/stores';

	export let pathname: string;
</script>

<li class:active={$page.url.pathname === pathname} class="pt-4 pb-[14px] md:p-0">
	<a sveltekit:prefetch href={pathname} class="font-semibold text-xl text-ink">
		<slot />
	</a>
</li>
