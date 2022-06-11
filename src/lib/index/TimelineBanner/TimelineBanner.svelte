<script lang="ts">
	import TimelineGrid from '$lib/index/TimelineBanner/TimelineGrid.svelte';
	import Container from '$lib/components/Container.svelte';

	import RedWhiteEscutcheon from '$lib/svgs/escutcheon/red-white.svg';
	import ChevronRight from '$lib/svgs/icons/patient/chevron-right.svg';

	import Button from '$lib/components/Button/Button.svelte';
	import TimelineItem from './TimelineItem.svelte';
	import TimelineTail from './TimelineTail.svelte';
	import TimelineBar from './TimelineBar.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import BlockDivider from '$lib/components/BlockDivider.svelte';

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
					<h1 class="content-4xl text-ink mb-16">
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
				We ensure every patient receives a consistent and appropriate preoperative evaluation that
				follows the latest evidence-based guidelines.
			</TimelineItem>
			<TimelineItem i={2} category="Surgical Optimization" title="Prepare for surgery.">
				Patients are coached through personalized prehabilitation plans that optimize their
				presurgical health across five essential, patient-centered domains.
			</TimelineItem>
			<TimelineItem
				i={3}
				category="Post-Discharge Monitoring"
				title="Prioritize continuity of care."
			>
				Patient engagement extends beyond discharge to track recovery progress and treatment
				adherence, preventing complications before they arise.
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
						<a sveltekit:prefetch href={'/contact'}>
							<Button color="cardinal">How It Works</Button>
						</a>
					</div>
					<div class="flex-none bg-cloud h-72 w-72">graphic</div>
				</div>
			</TimelineGrid>
		</div>
		<TimelineTail percentage={$percentage} />
	</Container>
</section>
