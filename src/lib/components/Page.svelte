<script>
	import { themeState } from '$lib/stores/themeState.svelte';

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
	{#if themeState.theme === 'light'}
		<div class="homepage-left-column fade-in">
			<img src={smilingEmoji} alt="Smiling emoji" class="light-theme-image" />
		</div>
	{/if}
	<div class="homepage-page">
		{@render children?.()}
	</div>
	{#if themeState.theme === 'dark'}
		<div class="homepage-right-column fade-in">
			<img
				src={smilingEmojiWithSunglasses}
				alt="Smiling emoji with sunglasses"
				class="dark-theme-image"
			/>
		</div>
	{/if}
</main>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.fade-in {
		animation: fade-in 1s ease-in-out;
	}

	.homepage-page {
		display: flex;
		flex-direction: column;
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

	.homepage-page :global(a) {
		color: #007bff;
		text-decoration: none;
	}

	.homepage-page :global(a:hover) {
		text-decoration: underline;
	}

	.homepage-page :global(h2) {
		margin-top: 30px;
	}
</style>
