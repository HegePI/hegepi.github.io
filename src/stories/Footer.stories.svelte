<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Footer from './Footer.svelte';

	const { Story } = defineMeta({
		component: Footer,
		title: 'Footer',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Footer" />
