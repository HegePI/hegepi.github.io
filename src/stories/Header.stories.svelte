<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Header from './Header.svelte';

	const { Story } = defineMeta({
		component: Header,
		title: 'Header',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Header" />
