import type { PageLoad } from './$types';
import { resumeData } from '$lib/data/resume';

export const load: PageLoad = () => {
	return {
		...resumeData
	};
};
