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

		.homepage-left-column,
		.homepage-right-column {
			display: flex;
			position: fixed;
			top: 100px; /* Adjust this value based on header height */
			bottom: 50px; /* Adjust this value based on footer height */
			width: 25%;
			justify-content: center;
			align-items: center;
		}

		.homepage-left-column {
			left: 0;
		}

		.homepage-right-column {
			right: 0;
		}
	}
</style>
