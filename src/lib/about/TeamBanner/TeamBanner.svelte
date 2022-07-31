<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Member from './Member.svelte';
</script>

<Section>
	<Container>
		<h1 class="content-4xl text-ink text-center mb-8">Our Team</h1>
		<p class="content-xl text-grey700 mb-16 text-center">
			We're a team of disruptors who believe in building a brighter
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
				<p>Created little b (award-winning systems biology language)</p>
				<p>Developed microscale CALI, Harvard University</p>
				<p>PhD Biochemistry/Cell Biology, UCSF</p>
			</Member>
      <Member
				src="imgs/team/jefferson.webp"
				name="Jefferson Griscavage"
				title="Director of Product"
			/>
      <Member src="imgs/team/don.png" name="Don Turner" title="Business Development">
				<p>Founder and Managing Director, MedTech Innovations Venture Capital Firm</p>
        <p>SVP, Global Head, Business Strategy and Commercialization</p>
				<p>Board Member, Center for the Business of Health, UNC Kenan-Flagler Business School</p>
		  </Member>

      <Member src="imgs/team/krishnaj.webp" name="Krishnaj Gourab" title="Medical Advisor">
				<p>Chief Medical Officer, Univ of Maryland Rehab & Ortho</p>
        <p>Adjunct faculty, Johns Hopkins University</p>
				<p>Founding independent board director, Rock Health</p>
		  </Member>

			<Member src="imgs/team/andrew.webp" name="Andrew Wang" title="Software Engineer" />
      <Member src="imgs/team/mitsu.png" name="Mitsu Hadeishi" title="Software Architecture Advisor">
				<p>Principal Architect, Twin Health</p>
        <p>Architect, Heartbeat Health</p>
				<p>Software Architect, Lark</p>
		  </Member>
      <Member src="imgs/team/cv.png" name="Constantine Vetoshev" title="Software Engineering Consultant">
				<p>Software Engineer, Kindred.ai</p>
        <p>Software Engineer, Remind.com</p>
				<p>Software Architect, Jurispect</p>
		  </Member>
		</div>

	</Container>
</Section>
