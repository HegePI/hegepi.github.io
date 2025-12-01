<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/stores/theme';

	import '$lib/global.css';
	import '$lib/themes.css';
	import '$lib/variables.css';

	let { children } = $props();

	$effect(() => {
		document.documentElement.classList.toggle('dark', $theme === 'dark');
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
