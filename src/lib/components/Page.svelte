<script>
	import { theme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	import smilingEmojiWithSunglasses from '$lib/assets/smilingEmojiWithSunglasses.webp';
	import smilingEmoji from '$lib/assets/smilingEmoji.webp';
</script>

<main>
	{#if $theme === 'light'}
		<div class="homepage-left-column" transition:fade={{ duration: 500 }}>
			<img src={smilingEmoji} alt="Smiling emoji" class="light-theme-image" />
		</div>
	{/if}
	<div class="homepage-page">
		{@render children?.()}
	</div>
	{#if $theme === 'dark'}
		<div class="homepage-right-column" transition:fade={{ duration: 500 }}>
			<img
				src={smilingEmojiWithSunglasses}
				alt="Smiling emoji with sunglasses"
				class="dark-theme-image"
			/>
		</div>
	{/if}
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

	.homepage-left-column,
	.homepage-right-column {
		display: none;
	}

	.dark-theme-image {
		display: none;
	}

	:global(.dark) .light-theme-image {
		display: none;
	}

	:global(.dark) .dark-theme-image {
		display: block;
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

		.homepage-left-column img,
		.homepage-right-column img {
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
		}

		.homepage-left-column {
			left: 0;
		}

		.homepage-right-column {
			right: 0;
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
