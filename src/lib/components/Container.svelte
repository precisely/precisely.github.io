<script lang="ts">
	export let classes: string = '';
</script>

<div class={`flex justify-center w-full ${classes}`}>
	<!-- 1280px with 20px padding = 1240px -->
	<div class="max-w-screen-xl container px-5">
		<slot />
	</div>
</div>
