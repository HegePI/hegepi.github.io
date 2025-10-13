<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import DarkModeSwitch from '../lib/components/DarkModeSwitch.svelte';

	const { Story } = defineMeta({
		component: DarkModeSwitch,
		title: 'Dark mode switch',
		tags: ['autodocs'],
		excludeStories: /.*Data$/
	});
</script>

<Story name="Dark mode switch" />
