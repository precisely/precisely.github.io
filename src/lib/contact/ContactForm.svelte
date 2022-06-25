<!-- Currently unused, using typeform integration instead -->
<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';

	let name: string = '';
	let email: string = '';
	let message: string = '';

	const submit = (e: Event) => {
		// Using FormSubmit to email form results
		// e.preventDefault();
		// console.log('submit!', name, email, message);
	};
</script>

<form
	class="flex flex-col mb-16"
	on:submit={submit}
	action="https://formsubmit.co/403caa07c15aabfe7a3dbdc09e083173"
	method="POST"
>
	<Input label="Name" name="name" bind:value={name} placeholder="Name" required />
	<Input label="Email" name="email" bind:value={email} placeholder="Email" type="email" required />
	<Input
		label="Message"
		name="message"
		bind:value={message}
		placeholder="Message"
		type="text"
		required
	/>
	<Button color="cardinal">Get in touch</Button>

	<!-- FormSubmit submission metadata  -->
	<input type="text" name="_honey" style="display:none" />
	<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
	<input type="hidden" name="_subject" value="New submission!" />
	<input type="hidden" name="_template" value="table" />
</form>
