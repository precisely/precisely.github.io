<script lang="ts">
	export let percentage: number;

	const maxLength = 600;
	const maxPercentage = 1.05;

	let dashOffset = maxLength;

	$: {
		dashOffset =
			percentage < 1
				? maxLength
				: percentage > maxPercentage
				? 0
				: (maxLength * (maxPercentage - percentage)) / (maxPercentage - 1);
	}
</script>

<div class="hidden md:block md:pl-5">
	<svg
		width="507"
		height="106"
		viewBox="0 0 507 106"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 0V32C4 70.6599 35.3401 102 74 102H507"
			stroke="url(#paint0_linear_2_282)"
			stroke-width="8"
			stroke-dasharray={`${maxLength}`}
			stroke-dashoffset={`${dashOffset}`}
		/>
		<defs>
			<linearGradient
				id="paint0_linear_2_282"
				x1="20.0892"
				y1="102.003"
				x2="720.394"
				y2="102.003"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#F28599" />
				<stop offset="0.692784" stop-color="#FDFDFD" />
			</linearGradient>
		</defs>
	</svg>
</div>
