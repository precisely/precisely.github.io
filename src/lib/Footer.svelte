<script lang="ts">
	import Logo from '$lib/svgs/logo/full-red-black.svg';
	import Container from '$lib/components/Container.svelte';
</script>

<footer class="bg-alice">
	<Container>
		<div class="flex justify-between mt-16">
			<div class="flex flex-col">
				<div class="inline-block h-[24px] mb-4">
					<Logo />
				</div>
				<a href="mailto:hello@precisely.com" class="font-medium"> hello@precisely.com </a>
				<div class="font-light">
					<a href="tel:444-326-2222">(444)-326-2222</a>
					<p class="mt-2">
						Address: <br />
						79 Park Hill Avenue <br />
						San Francisco, CA 94117
					</p>
				</div>
			</div>
			<div class="flex flex-col justify-between h-auto">
				<div class="flex gap-12 justify-end">
					<a sveltekit:prefetch href="/about" class="text-lg">About</a>
					<a sveltekit:prefetch href="/contact" class="text-lg">Contact</a>
				</div>
				<div class="flex gap-12">
					<img class="object-contain h-8" src="/imgs/hipaa.png" alt="HIPAA" />
					<img class="object-contain h-8" src="/imgs/hitrust.png" alt="HITRUST" />
					<img class="object-contain h-8" src="/imgs/soc2.png" alt="SOC 2" />
				</div>
			</div>
		</div>

		<div class="flex justify-center py-12">
			<span class="text-grey600 font-medium">© 2022 Precise.ly Inc</span>
		</div>
	</Container>
</footer>
