<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Page from './Page.svelte';

	const { Story } = defineMeta({
		component: Page,
		title: 'Page',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Page" />
