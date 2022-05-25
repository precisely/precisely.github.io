<script lang="ts">
	import { page } from '$app/stores';

	export let pathname: string;
</script>

<a sveltekit:prefetch href={pathname} class="text-xl font-semibold"><slot /></a>
