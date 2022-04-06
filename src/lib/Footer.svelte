<script lang="ts">
	import Logo from '$lib/svgs/logo/full-red-black.svg';
	import Container from '$lib/Container.svelte';
</script>

<footer class="bg-alice">
	<Container>
		<div class="flex justify-between mt-16">
			<div class="flex flex-col">
				<div class="inline-block h-[24px] mb-4">
					<Logo />
				</div>
				<a href="mailto:hello@precisely.com" class="font-medium text-gray-600">
					hello@precisely.com
				</a>
				<div class="text-grey500 font-light">
					<a href="tel:444-326-2222">(444)-326-2222</a>
					<p class="mt-2">
						Address: <br />
						79 Park Hill Avenue <br />
						San Francisco, CA 94117
					</p>
				</div>
			</div>
			<div />
		</div>

		<div class="flex justify-center py-8">
			<span class="text-grey500 font-medium"> © 2022 Precise.ly Inc </span>
		</div>
	</Container>
</footer>
