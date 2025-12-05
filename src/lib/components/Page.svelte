<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="homepage-page">
	{@render children?.()}
</div>

<style>
	.homepage-page {
		display: flex;
		flex-direction: column;
		align-items: left;
		margin: 0;
	}

	@media (min-width: 768px) {
		.homepage-page {
			margin-left: 25%;
			margin-right: 25%;
		}
	}
</style>
