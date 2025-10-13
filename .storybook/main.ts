import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	async viteFinal(config) {
		const { ...rest } = config;
		return mergeConfig(rest, {
			resolve: {
				alias: {
					$app: path.resolve(process.cwd(), '.svelte-kit/dev/runtime/app')
				}
			}
		});
	}
};
export default config;
