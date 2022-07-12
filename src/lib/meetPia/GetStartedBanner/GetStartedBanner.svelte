<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Panel from './Panel.svelte';

	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';
	import CompliantSvg from './compliant.svg';
	import IntegratedSvg from './integrated.svg';
	import InteroperableSvg from './interoperable.svg';
	import SecureSvg from './secure.svg';
</script>

<Section>
	<Container>
		<div class="flex flex-col items-center">
			<ScrollAnimate>
				<h1 class="content-4xl text-ink mb-8 text-center">Get started quickly and securely</h1>
			</ScrollAnimate>
			<ScrollAnimate>
				<p class="content-xl text-grey700 max-w-2xl mb-16 text-center">
					We'll take care of the technology, so you can take care of your patients.
				</p>
			</ScrollAnimate>

			<div class="flex flex-col md:grid md:grid-cols-2 gap-24">
				<Panel title="Integrated">
					<span slot="graphic">
						<IntegratedSvg />
					</span>
					Sync seamlessly with your existing EHR to eliminate operational redundancies.
				</Panel>
				<Panel title="Compliant">
					<span slot="graphic">
						<CompliantSvg />
					</span>
					We meet the highest HIPAA, HITRUST, and SOC/2 data security standards.
				</Panel>
				<Panel title="Secure">
					<span slot="graphic">
						<SecureSvg />
					</span>
					End-to-end encryption keeps your patient data protected at all times.
				</Panel>
				<Panel title="Interoperable">
					<span slot="graphic">
						<InteroperableSvg />
					</span>
					Collect and record data from wearables and home monitoring devices.
				</Panel>
			</div>
		</div>
	</Container>
</Section>
