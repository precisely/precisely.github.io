<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Panel from './Panel.svelte';

	import ScrollAnimate from '$lib/components/ScrollAnimate.svelte';
	import HeadsetSvg from './headset.svg';
	import PeopleSvg from './people.svg';
	import TargetSvg from './target.svg';
</script>

<Section>
	<Container>
		<div class="flex flex-col items-center">
			<ScrollAnimate>
				<h1 class="content-4xl text-ink mb-16 text-center">Modular solution for the entire team</h1>
			</ScrollAnimate>
			<div class="flex flex-col lg:flex-row w-full items-center justify-between mb-16 gap-32">
				<ScrollAnimate>
					<div class="flex-1">
						<img
							class="max-h-[456px] md:h-[456px] w-full object-contain"
							src="./imgs/graphics/meetPia/modularSolution.svg"
							alt="Modular Solution"
						/>
					</div>
				</ScrollAnimate>

				<div class="flex flex-col gap-16">
					<Panel category="For Patients" title="Precision Coaching">
						<span slot="graphic">
							<TargetSvg />
						</span>
						Rich content libraries and advanced conversational AI maximizes patient engagement, adherence,
						and outcomes
					</Panel>

					<Panel category="For Providers" title="Decision Support">
						<span slot="graphic">
							<HeadsetSvg />
						</span>
						Less data, more insight. Actionable alerts and automatic risk stratification keep clinicians
						on track and on time
					</Panel>

					<Panel category="For Systems" title="Connected Teams">
						<span slot="graphic">
							<PeopleSvg />
						</span>
						Closed loop communication keeps cross-functional teams informed, prevents data siloing, and
						eliminates gaps in care
					</Panel>
				</div>
			</div>
		</div>
	</Container>
</Section>
