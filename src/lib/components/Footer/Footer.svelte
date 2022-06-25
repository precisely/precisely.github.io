<script lang="ts">
	import Logo from '$lib/svgs/logo/white.svg';
	import Container from '$lib/components/Container.svelte';
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="bg-grey800 pt-16 pb-8 text-coconut">
	<Container>
		<div class="flex flex-col md:flex-row justify-between mb-8 gap-8">
			<div class="flex flex-col">
				<div class="inline-block h-8 mb-6">
					<Logo height="100%" />
				</div>
				<a href="mailto:info@precise.ly" class="content-lg mb-8"> info@precise.ly </a>
				<p class="content-lg">
					Address: <br />
					301 Howard St Suite 950 <br />
					San Francisco, CA
				</p>
			</div>
			<div class="flex flex-col justify-between h-auto gap-4">
				<ul class="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-end mb-8">
					<FooterLink pathname="/about">About</FooterLink>
					<FooterLink pathname="/contact">Contact</FooterLink>
				</ul>
				<div class="flex flex-wrap md:flex-nowrap items-center gap-8">
					<img class="object-contain h-12" src="/imgs/certifications/hipaa.png" alt="HIPAA" />
					<img class="object-contain h-12" src="/imgs/certifications/hitrust.png" alt="HITRUST" />
					<img class="object-contain h-12" src="/imgs/certifications/soc2.png" alt="SOC 2" />
				</div>
			</div>
		</div>

		<p class="text-center text-cloud content-lg-b">© 2022 Precise.ly Inc</p>
	</Container>
</footer>
