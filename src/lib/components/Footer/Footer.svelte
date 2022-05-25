<script lang="ts">
	import Logo from '$lib/svgs/logo/white.svg';
	import Container from '$lib/components/Container.svelte';
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="bg-grey800 pt-16 pb-8 text-coconut">
	<Container>
		<div class="flex justify-between mb-8">
			<div class="flex flex-col">
				<div class="inline-block h-8 mb-6">
					<Logo />
				</div>
				<a href="mailto:info@precisely.com" class="content-lg mb-8"> info@precisely.com </a>
				<p class="content-lg">
					Address: <br />
					301 Howard St Suite 950 <br />
					San Francisco, CA
				</p>
			</div>
			<div class="flex flex-col justify-between h-auto">
				<ul class="flex gap-8 justify-end">
					<FooterLink pathname="/about">About</FooterLink>
					<FooterLink pathname="/contact">Contact</FooterLink>
				</ul>
				<div class="flex items-center gap-8">
					<img class="object-contain h-12" src="/imgs/hipaa.png" alt="HIPAA" />
					<img class="object-contain h-12" src="/imgs/hitrust.png" alt="HITRUST" />
					<img class="object-contain h-12" src="/imgs/soc2.png" alt="SOC 2" />
				</div>
			</div>
		</div>

		<p class="text-center text-cloud content-lg-b">© 2022 Precise.ly Inc</p>
	</Container>
</footer>
