import type { Preview } from '@storybook/sveltekit';
import '../src/lib/variables.css';
import '../src/lib/themes.css';
import '../src/lib/global.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
