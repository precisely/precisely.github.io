<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import MemberData from './MemberData.svelte';
	import './memberModal.css';

	export let src: string;
	export let name: string;
	export let title: string;
	export let slot: any; // data originally in the Member slot
</script>

<Container>
	<div class="bg-white flex p-8 gap-8 rounded-lg">
		<div class="flex flex-col items-center">
			<MemberData {src} {name} {title} />
		</div>
		<div class="content-xl max-w-lg">
			{@html slot}
		</div>
	</div>
</Container>
