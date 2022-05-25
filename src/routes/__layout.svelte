<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import '../global.css';
</script>

<div class="flex flex-col min-h-screen">
	<main class="flex-1 pt-[88px]">
		<Header />
		<slot />
	</main>
	<Footer />
</div>
