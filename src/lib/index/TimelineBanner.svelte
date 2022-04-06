<script lang="ts">
	import TimelineGrid from '$lib/index/TimelineGrid.svelte';
	import Container from '$lib/Container.svelte';

	import RedWhiteEscutcheon from '$lib/svgs/escutcheon/red-white.svg';
	import ChevronRight from '$lib/svgs/icons/patient/chevron-right.svg';
	import TimelineTail from '$lib/svgs/timeline-tail.svg';
	import Button from '$lib/Button/Button.svelte';

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
</script>

<div class="flex items-center py-16">
	<Container>
		<div class="relative">
			<div class="absolute top-0 left-0 w-12 h-full flex justify-center z-0">
				<div class="timeline-bar" />
			</div>
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
					<div
						class="flex justify-center items-center w-12 h-12 border-2 border-alice rounded text-lg font-semibold bg-white my-16"
					>
						{i + 1}
					</div>
					<div class="flex gap-8 ml-8 my-16">
						<div class="flex-none bg-cloud h-72 w-72">
							{obj.graphic}
						</div>
						<div class="flex flex-col">
							<h4 class="text-2xl font-semibold mb-4">{obj.title}</h4>
							<p class="text-grey600 text-lg">{obj.body}</p>
						</div>
					</div>
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

						<a href="">
							<Button color="cardinal" classes="flex w-fit items-center">
								Get started today <ChevronRight height="1em" />
							</Button>
						</a>
					</div>
					<div class="flex-none bg-cloud h-72 w-72">graphic</div>
				</div>
			</TimelineGrid>
		</div>
		<div class="pl-5"><TimelineTail /></div>
	</Container>
</div>
