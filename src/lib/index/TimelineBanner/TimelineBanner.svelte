<script lang="ts">
	import TimelineGrid from '$lib/index/TimelineBanner/TimelineGrid.svelte';
	import Container from '$lib/Container.svelte';

	import RedWhiteEscutcheon from '$lib/svgs/escutcheon/red-white.svg';
	import ChevronRight from '$lib/svgs/icons/patient/chevron-right.svg';
	// import TimelineTail from '$lib/svgs/timeline-tail.svg';
	import Button from '$lib/Button/Button.svelte';
	import TimelineItem from './TimelineItem.svelte';
	import TimelineTail from './TimelineTail.svelte';
	import TimelineBar from './TimelineBar.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

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

<div class="flex items-center py-16" use:onScroll>
	<Container>
		<div class="relative">
			<TimelineBar percentage={$percentage} />
			<TimelineGrid>
				<RedWhiteEscutcheon height={'3rem'} width={'3rem'} />
				<div class="mb-16">
					<h2 class="font-semibold text-3xl mb-8">Redefine Perioperative Standard of Care.</h2>
					<p class="text-grey600 text-xl">
						Precisely is an end-to-end platform that delivers a premium patient experience by
						orchestrating care across the entire surgical journey.
					</p>
				</div>
			</TimelineGrid>
			{#each content as obj, i}
				<TimelineGrid>
					<TimelineItem {i} {obj} />
				</TimelineGrid>
			{/each}

			<TimelineGrid>
				<div />
				<div class="flex gap-8 mt-16">
					<div>
						<h2 class="font-semibold text-3xl mb-4 max-w-sm">
							Modernize your approach to perioperative care.
						</h2>
						<div class="h-2 w-8 bg-azure mb-8" />
						<p class="text-grey600 text-xl mb-12">
							It's time to end fragmentation in healthcare delivery. Precisely can help you deliver
							a connected end-to-end experience for the patient and care team.
						</p>

						<Button color="cardinal" classes="flex w-fit items-center">
							Get started today <ChevronRight height="1em" />
						</Button>
					</div>
					<div class="flex-none bg-cloud h-72 w-72">graphic</div>
				</div>
			</TimelineGrid>
		</div>
		<TimelineTail percentage={$percentage} />
	</Container>
</div>
