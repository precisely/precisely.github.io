<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import ModalWrapper from '$lib/components/ModalWrapper/ModalWrapper.svelte';
	import '../global.css';
</script>

<ModalWrapper>
	<div class="flex flex-col min-h-screen">
		<main class="flex-1 pt-[88px]">
			<Header />
			<slot />
		</main>
		<Footer />
	</div>
</ModalWrapper>
