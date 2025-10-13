<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Footer from '../lib/components/Footer.svelte';

	const { Story } = defineMeta({
		component: Footer,
		title: 'Footer',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Footer">
	<p>This is a placeholder for the Footer component story.</p>
</Story>
