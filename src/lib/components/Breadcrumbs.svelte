<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const pathnames = writable<string[]>([]);

	onMount(() => {
		return page.subscribe((p) => {
			pathnames.set(p.url.pathname.split('/').filter(Boolean));
		});
	});
</script>

<nav aria-label="breadcrumb">
	<ol class="breadcrumbs">
		<li class="breadcrumb-item">
			<a href="/">Home</a>
		</li>
		{#each $pathnames as segment, i}
			<li class="breadcrumb-item">
				{#if i === $pathnames.length - 1}
					{segment}
				{:else}
					<a href={`/${$pathnames.slice(0, i + 1).join('/')}`}>{segment}</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.breadcrumbs {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.breadcrumb-item {
		text-transform: capitalize;
	}

	.breadcrumb-item + .breadcrumb-item::before {
		content: '>';
		margin: 0 0.5rem;
		color: var(--text-color);
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
