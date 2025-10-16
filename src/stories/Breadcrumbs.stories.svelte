<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Breadcrumbs from '../lib/components/Breadcrumbs.svelte';

	const { Story } = defineMeta({
		component: Breadcrumbs,
		title: 'Breadcrumbs',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Default">
	<Breadcrumbs />
</Story>
