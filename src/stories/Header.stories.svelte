<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Header from '../lib/components/Header.svelte';

	const { Story } = defineMeta({
		component: Header,
		title: 'Header',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Header">
	<p>This is a placeholder for the Header component story.</p>
</Story>
