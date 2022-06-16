<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- To generate the preview when linking on social media -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.precise.ly/" />
	<meta property="og:site_name" content="Precisely" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- needs an absolute link, can't use relative link -->
	<meta property="og:image" content="https://precisely.github.io/imgs/social-image.png" />
</svelte:head>
