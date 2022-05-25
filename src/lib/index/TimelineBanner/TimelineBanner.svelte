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

	const content = [
		{
			graphic: 'graphic',
			title: 'Preoperative Evaluation',
			body: 'Eliminate gaps in care. We ensure every patient receives a consistent and appropriate preoperative evaluation that follows the latest evidence-based guidelines.'
		},
		{
			graphic: 'graphic',
			title: 'Surgical Optimization',
			body: "Prepare patients for surgery. We create personalized care plans that optimize each patient's health across five essential, patient-centered domains."
		},
		{
			graphic: 'graphic',
			title: 'Post-discharge Monitoring',
			body: 'Enhance continuity of care. We keep patients engaged after their surgery to track their recovery and alert you before complications arise.'
		}
	];

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

<section class="flex items-center py-16" use:onScroll>
	<Container>
		<div class="relative">
			<TimelineBar percentage={$percentage} />
			<TimelineGrid classes="mb-32">
				<RedWhiteEscutcheon height={'3rem'} width={'3rem'} />
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
				<div />
				<div class="flex justify-between gap-8">
					<div class="max-w-lg">
						<h2 class="content-4xl mb-4">Optimize your approach to perioperative medicine</h2>
						<BlockDivider classes="bg-azure mb-8" />
						<p class="content-xl text-grey700 mb-16">
							Precisely delivers a comprehensive and connected experience for the patient and care
							team.
						</p>

						<Button color="cardinal">How It Works</Button>
					</div>
					<div class="flex-none bg-cloud h-72 w-72">graphic</div>
				</div>
			</TimelineGrid>
		</div>
		<TimelineTail percentage={$percentage} />
	</Container>
</section>
