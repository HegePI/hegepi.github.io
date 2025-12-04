<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { themeState } from '$lib/stores/themeState.svelte';
	import Page from '$lib/components/Page.svelte';

	import '$lib/global.css';
	import '$lib/themes.css';
	import '$lib/variables.css';

	import '../app.css';

	let { children } = $props();

	$effect(() => {
		document.documentElement.classList.toggle('dark', themeState.theme === 'dark');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class:dark={themeState.theme === 'dark'}>
	<Header />

	<Page>
		{@render children?.()}
	</Page>

	<Footer>
		<p>Contact me @ ...</p>
	</Footer>
</main>

<style>
	p {
		padding: 0.5rem;
	}
</style>
