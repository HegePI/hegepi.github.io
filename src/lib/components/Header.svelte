<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	<header class="homepage-header">
		{@render children?.()}
	</header>
</main>

<style>
	.homepage-header {
		width: 100%;
		top: 0;
		left: 0;
		z-index: 101;
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}
</style>
