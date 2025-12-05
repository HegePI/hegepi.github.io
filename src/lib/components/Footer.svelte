<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="homepage-footer">
	{@render children?.()}
</div>

<style>
	.homepage-footer {
		width: 100%;
	}

	/* Footer fixed at bottom for larger screens */
	@media (min-width: 768px) {
		.homepage-footer {
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 100;
		}
	}

	/* Footer only visible on mobile when scrolled down */
	@media (max-width: 767px) {
		.homepage-footer {
			position: static;
			display: none;
		}
	}
</style>
