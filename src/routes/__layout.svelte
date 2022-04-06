<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../global.css';
</script>

<div class="flex flex-col min-h-screen">
	<main class="flex-1 pt-20">
		<Header />
		<slot />
	</main>
	<Footer />
</div>
