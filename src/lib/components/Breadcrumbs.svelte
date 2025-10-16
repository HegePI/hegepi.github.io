<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let {
		separator = '/',
		homeLabel = 'Home',
		formatLabel = (segment: string) =>
			segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
	} = $props();

	const items = $derived(() => {
		const path = page.url.pathname;
		const segments = path.split('/').filter(Boolean);

		const breadcrumbs: Array<{ label: string; href: string; isLast: boolean }> = [
			{ label: homeLabel, href: '/', isLast: segments.length === 0 }
		];

		let currentPath = '';
		segments.forEach((segment, index) => {
			currentPath += `/${segment}`;
			breadcrumbs.push({
				label: formatLabel(segment),
				href: currentPath,
				isLast: index === segments.length - 1
			});
		});

		return breadcrumbs;
	});
</script>

<nav aria-label="Breadcrumb">
	<ol class="breadcrumbs">
		{#each items() as item, index (index)}
			<li class="breadcrumb-item">
				{#if item.href && !item.isLast}
					<a href={resolve(item.href)}>
						{item.label}
					</a>
				{:else}
					<span class="current">
						{item.label}
					</span>
				{/if}
				{#if index < items().length - 1}
					<span class="separator" aria-hidden="true">{separator}</span>
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
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.breadcrumb-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		color: #0066cc;
		text-decoration: none;
		transition: color 0.2s;
	}

	a:hover {
		text-decoration: underline;
		color: #0052a3;
	}

	.current {
		color: #333;
		font-weight: 500;
	}

	.separator {
		color: #999;
		user-select: none;
	}
</style>
