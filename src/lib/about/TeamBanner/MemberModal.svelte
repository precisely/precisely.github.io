<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { hideComponent } from '$lib/components/ModalWrapper/ModalWrapper.svelte';
	import MemberData from './MemberData.svelte';
	import './memberModal.css';

	export let src: string;
	export let name: string;
	export let title: string;
	export let slot: any; // data originally in the Member slot
</script>

<Container>
	<div class="bg-white flex flex-col md:flex-row p-8 gap-8 rounded-lg" on:click={hideComponent}>
		<div class="flex flex-col items-center">
			<MemberData {src} {name} {title} />
		</div>
		<div class="content-xl max-w-lg">
			{@html slot}
		</div>
	</div>
</Container>
