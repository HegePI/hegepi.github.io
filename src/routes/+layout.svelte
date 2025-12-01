<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	import '$lib/global.css';
	import '$lib/themes.css';
	import '$lib/variables.css';

	let { children } = $props();

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
