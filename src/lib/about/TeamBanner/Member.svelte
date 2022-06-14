<script lang="ts">
	import MemberData from './MemberData.svelte';
	import MemberModal from './MemberModal.svelte';
	import { showComponent } from '$lib/components/ModalWrapper/ModalWrapper.svelte';

	export let src: string;
	export let name: string;
	export let title: string;

	let slot: HTMLElement; // used to retrieve the HTML data from the slot

	function toggleModal() {
		if (slot?.innerHTML) showComponent(MemberModal, { src, name, title, slot: slot?.innerHTML });
	}
</script>

<!-- used to retrieve the HTML data from the slot -->
<span class="hidden" bind:this={slot}><slot /></span>

<div
	class={`w-64 flex flex-col items-center ${slot?.innerHTML ? 'cursor-pointer' : ''}`}
	on:click={toggleModal}
>
	<MemberData {src} {name} {title} />
</div>
