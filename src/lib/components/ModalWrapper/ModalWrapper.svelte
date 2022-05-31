<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';

	// modal is an instance of a Svelte component
	const modal = writable(null);

	export function showComponent(Component: any, props: Record<string, any>) {
		// creates an instance of the svelte component
		modal.set(bind(Component, props));
	}
	export function hideComponent() {
		modal.set(null);
	}
</script>

<Modal
	show={$modal}
	unstyled={true}
	classBg="fixed top-0 left-0 w-screen h-screen overflow-y-scroll flex bg-grey800/50 z-50"
	classWindowWrap="block m-auto"
	closeButton={false}
>
	<slot />
</Modal>
