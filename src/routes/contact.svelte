<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import Container from '$lib/components/Container.svelte';

	const submit = (e: Event) => {
		e.preventDefault();
		console.log('submit!');
	};

	let name = '';
	let email = '';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section class="flex items-center py-16">
	<Container>
		<div class="flex flex-col max-w-sm">
			<h1 class="font-semibold text-5xl mb-4">Let's Talk</h1>
			<p class="text-grey600 text-xl mb-16">
				Have a question? Our team would love to hear from you and help in any way we can.
			</p>
			<form class="flex flex-col mb-16" on:submit={submit}>
				<Input label="Name" name="name" value={name} placeholder="Name" required />
				<Input label="Email" name="email" value={email} placeholder="Email" type="email" required />
				<Button color="cardinal">Get in touch</Button>
			</form>
		</div>
	</Container>
</section>
