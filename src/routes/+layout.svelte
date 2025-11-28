<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	import '$lib/variables.css';
	import '$lib/themes.css';
	import '$lib/global.css';

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			theme.set(storedTheme as 'light' | 'dark');
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme.set(prefersDark ? 'dark' : 'light');
		}
	});

	theme.subscribe((value) => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', value === 'dark');
			localStorage.setItem('theme', value);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class:dark={$theme === 'dark'}>
	<Header />

	{@render children?.()}
	<Footer>
		<p>Contact me @ ...</p>
	</Footer>
</main>

<style>
	p {
		padding: 0.5rem;
	}
</style>
