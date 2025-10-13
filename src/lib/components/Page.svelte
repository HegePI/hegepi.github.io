<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<main>
	<div class="homepage-page">
		{@render children?.()}
	</div>
</main>

<style>
	.homepage-page {
		display: flex;
		flex-direction: column;
		font-family:
			'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
			sans-serif;
		align-items: left;
		margin: 0;
	}

	@media (min-width: 768px) {
		.homepage-page {
			margin-left: 25%;
			margin-right: 25%;
		}
	}

	.homepage-page :global(h1) {
		color: #333;
	}

	.homepage-page :global(p) {
		color: #777;
	}

	.homepage-page :global(a) {
		color: #007bff;
		text-decoration: none;
	}

	.homepage-page :global(a:hover) {
		text-decoration: underline;
	}

	.homepage-page :global(h2) {
		color: #555;
		margin-top: 30px;
	}
</style>
