<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Page from '../lib/components/Page.svelte';
	import { resolve } from '$app/paths';
	const { Story } = defineMeta({
		component: Page,
		title: 'Page',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Page">
	<h1>Page Component</h1>
	<p>This is a placeholder for the Page component story.</p>

	<h2>Subheader</h2>
	<p>This is a paragraph. <a href={resolve('/')}>Link</a> to another URL.</p>
</Story>
