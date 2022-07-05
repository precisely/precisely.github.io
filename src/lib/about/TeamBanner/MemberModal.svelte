<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { hideComponent } from '$lib/components/ModalWrapper/ModalWrapper.svelte';
	import MemberData from './MemberData.svelte';
	import XmarkSvg from './xmark.svg';
	import './memberModal.css';

	export let src: string;
	export let name: string;
	export let title: string;
	export let slot: any; // data originally in the Member slot
</script>

<Container>
	<div
		class="bg-white relative flex flex-col md:flex-row pt-16 p-8 gap-8 rounded-lg"
		on:click={hideComponent}
	>
		<div class="absolute top-4 right-4 cursor-pointer">
			<XmarkSvg height="24px" />
		</div>
		<div class="flex flex-col items-center">
			<MemberData {src} {name} {title} />
		</div>
		<div class="content-xl max-w-lg">
			{@html slot}
		</div>
	</div>
</Container>
