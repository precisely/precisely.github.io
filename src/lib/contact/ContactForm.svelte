<!-- Currently unused, using typeform integration instead -->
<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';

	let name: string = '';
	let email: string = '';
	let comments: string = '';

	const submit = (e: Event) => {
		e.preventDefault();
		console.log('submit!', name, email, comments);
	};
</script>

<form class="flex flex-col mb-16" on:submit={submit}>
	<Input label="Name" name="name" bind:value={name} placeholder="Name" required />
	<Input label="Email" name="email" bind:value={email} placeholder="Email" type="email" required />
	<Input
		label="Comments"
		name="comments"
		bind:value={comments}
		placeholder="Comments"
		type="text"
		required
	/>
	<Button color="cardinal">Get in touch</Button>
</form>
