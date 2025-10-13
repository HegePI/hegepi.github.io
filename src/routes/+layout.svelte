<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import './../stories/header.css';
	import './../stories/footer.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<header class="homepage-header">
		<h1>Homepage</h1>
	</header>
	{@render children?.()}
	<footer class="homepage-footer">
		<p>Contact me</p>
	</footer>
</main>
