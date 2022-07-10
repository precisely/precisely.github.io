<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import TimelineGrid from '$lib/index/TimelineBanner/TimelineGrid.svelte';

	import RedWhiteEscutcheon from '$lib/svgs/escutcheon/red-white.svg';

	import BlockDivider from '$lib/components/BlockDivider.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import TimelineBar from './TimelineBar.svelte';
	import TimelineItem from './TimelineItem.svelte';
	import TimelineTail from './TimelineTail.svelte';
	// Graphics
	// import PreoperativeGraphic from './preoperative.svg';
	// import SurgicalGraphic from './surgical.svg';
	// import PostDischargeGraphic from './post-discharge.svg';
	// import OptimizeGraphic from './optimize.svg';

	import './timelineBanner.css';

	let percentage = tweened(0, { duration: 100, easing: cubicOut });

	const onScroll = (node: HTMLElement) => {
		const handle = () => {
			const screenBottom = window.scrollY + window.innerHeight;
			const bannerTop = node.offsetTop + 256;
			const bannerBottom = node.offsetTop + node.offsetHeight + 128;

			let percent = (screenBottom - bannerTop) / (bannerBottom - bannerTop);

			if (percent < 0) percent = 0;

			percentage.set(percent);
		};

		window.addEventListener('scroll', (event) => handle());
		handle();

		return {
			destroy() {
				window.removeEventListener('scroll', (event) => handle());
			}
		};
	};
</script>

<section class="relative flex items-center py-24 md:py-32" use:onScroll>
	<Container>
		<div class="relative">
			<TimelineBar percentage={$percentage} />

			<TimelineGrid classes="mb-16 md:mb-32">
				<span slot="lead">
					<RedWhiteEscutcheon height={'3rem'} width={'3rem'} />
				</span>
				<div>
					<h1 class="content-4xl text-ink mb-16 text-center md:text-left">
						Orchestrate care across the entire surgical journey
					</h1>
					<p class="content-xl text-grey700">
						PIA™ (Precisely Intelligent Assistant) is a virtual patient navigator that coordinates
						high-quality, patient-centered care from end-to-end. PIA mitigates surgical risk and
						optimizes outcomes by eliminating oversights and creating dynamic care plans that are
						personalized to the unique needs and goals of every patient.
					</p>
				</div>
			</TimelineGrid>
			<TimelineItem i={1} category="Preoperative Evaluation" title="Eliminate gaps in care.">
				<span slot="graphic">
					<!-- <PreoperativeGraphic width="100%" max-width="400px" /> -->
					<img
						class="object-contain max-h-64 md:max-h-auto"
						src="./imgs/graphics/preoperative.svg"
						alt="Preoperative Evaluation"
					/>
				</span>
				We ensure every patient receives a consistent and appropriate preoperative evaluation that follows
				the latest evidence-based guidelines.
			</TimelineItem>
			<TimelineItem i={2} category="Surgical Optimization" title="Prepare for surgery.">
				<span slot="graphic">
					<!-- <SurgicalGraphic width="100%" max-width="400px" /> -->
					<img
						class="object-contain max-h-64 md:max-h-auto"
						src="./imgs/graphics/surgical.svg"
						alt="Surgical Optimization"
					/>
				</span>
				Patients are coached through personalized prehabilitation plans that optimize their presurgical
				health across five essential, patient-centered domains.
			</TimelineItem>
			<TimelineItem
				i={3}
				category="Post-Discharge Monitoring"
				title="Prioritize continuity of care."
			>
				<span slot="graphic">
					<!-- <PostDischargeGraphic width="100%" /> -->
					<img
						class="object-contain max-h-64 md:max-h-auto"
						src="./imgs/graphics/post-discharge.svg"
						alt="Post-Discharge Monitoring"
					/>
				</span>
				Patient engagement extends beyond discharge to track recovery progress and treatment adherence,
				preventing complications before they arise.
			</TimelineItem>

			<TimelineGrid>
				<div class="flex flex-col-reverse md:flex-row justify-between gap-8">
					<div class="md:max-w-lg">
						<h2 class="content-4xl mb-4">Optimize your approach to perioperative medicine</h2>
						<BlockDivider classes="bg-azure mb-8" />
						<p class="content-xl text-grey700 mb-16">
							Precisely delivers a comprehensive and connected experience for the patient and care
							team.
						</p>
						<a sveltekit:prefetch href={'/meetPia'}>
							<Button color="cardinal">How it Works</Button>
						</a>
					</div>
					<div class="flex-none md:w-[512px]">
						<img
							class="object-contain max-h-64 md:max-h-auto"
							src="./imgs/graphics/optimize.svg"
							alt="Optimize Approach"
						/>
					</div>
				</div>
			</TimelineGrid>
		</div>
		<TimelineTail percentage={$percentage} />
	</Container>
</section>
