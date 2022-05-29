<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Container from '$lib/components/Container.svelte';
	import PlusColors from '$lib/svgs/plus-colors.svg';
	import Panel from './Panel.svelte';

	import TimerSvg from './timer.svg';
	import EngagementSvg from './engagement.svg';
	import LockSvg from './lock.svg';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<Section classes="bg-puff/50">
	<Container>
		<div class="flex flex-col items-center justify-center mb-16">
			<h1 class="content-4xl text-center mb-8">Simplify the process of delivering complex care</h1>
			<PlusColors height="2rem" />
		</div>
		<div class="flex flex-col items-center md:flex-row justify-between gap-8 mb-16">
			<Panel title="Improved efficiency">
				<span slot="graphic">
					<TimerSvg height="100%" />
				</span>
				We handle routine and time-consuming administrative tasks
			</Panel>
			<Panel title="Superior engagement">
				<span slot="graphic">
					<EngagementSvg height="100%" />
				</span>
				We empower your patients with customized tools and resources
			</Panel>
			<Panel title="Data security">
				<span slot="graphic">
					<LockSvg height="100%" />
				</span>
				End-to-end encryption and industry leading data privacy practices
			</Panel>
		</div>
		<Button color="cardinal" classes="mx-auto">Contact Us</Button>
	</Container>
</Section>
