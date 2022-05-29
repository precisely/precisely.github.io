<script lang="ts">
	export let percentage: number;

	$: height = Math.min(100, percentage * 100);
</script>

<div class="absolute top-0 left-0 w-12 h-full hidden md:flex justify-center z-0">
	<div class="timeline-bar" style={`height: ${height}%`} />
</div>
