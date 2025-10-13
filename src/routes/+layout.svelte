<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import DarkModeSwitch from '../lib/components/DarkModeSwitch.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	import '$lib/variables.css';
	import '$lib/themes.css';
	import '$lib/global.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<Header>
		<p>Homepage</p>
		<DarkModeSwitch />
	</Header>
	{@render children?.()}
	<Footer>
		<p>Contact me</p>
	</Footer>
</main>
