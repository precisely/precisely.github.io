<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Member from './Member.svelte';
</script>

<Section>
	<Container>
		<h1 class="content-4xl text-ink text-center mb-8">Our Team</h1>
		<p class="content-xl text-grey700 mb-16 text-center">
			We're a team of doctors, scientists, and innovators who believe in building a brighter
			healthcare future.
		</p>
		<div class="flex flex-wrap justify-center gap-16">
			<Member src="imgs/team/linda.webp" name="Linda Avey" title="Cofounder & CEO">
				<p>
					Co-founder and former Co-President, 23andMe <br />
					Board of Advisors, Verily
				</p>
				<p>Board of Fellows, Stanford Medical School</p>
				<p>Founding independent board director, Rock Health</p>
				<p>
					Business roles at Affymetrix, Perlegen, Spotfire, Chemdex, and Applied Biosystems in San
					Francisco, Boston, San Diego, and Washington, DC
				</p>
			</Member>
			<Member src="imgs/team/aneil.webp" name="Aneil Mallavarapu, PhD" title="Cofounder & CTO">
				<p>Founder, DeepDialog (AI for complex conversational flows)</p>
				<p>Head of growth, Remind (#1 teacher communication app)</p>
				<p>Led knowledge management, Millennium Pharmaceuticals</p>
				<p>Designed math model reduction algorithms, SRI</p>
				<p>Created little b (award-winning systems biology language)</p>
				<p>Developed microscale CALI, Harvard University</p>
				<p>PhD Biochemistry/Cell Biology, UCSF</p>
			</Member>
			<Member
				src="imgs/team/jefferson.webp"
				name="Jefferson Griscavage"
				title="Director of Product"
			/>
			<Member src="imgs/team/andrew.webp" name="Andrew Wang" title="Software Engineer" />
		</div>
	</Container>
</Section>
