export interface ResumePageData {
	profile: { description: string };
	workExperience: Array<{
		company: string;
		position: string;
		startDate: string;
		endDate: string;
		responsibilities: string[];
	}>;
	education: Array<{
		institution: string;
		degree: string;
		startDate: string;
		endDate: string;
		thesis?: string;
		grade?: string;
	}>;
	languageSkills: Array<{ language: string; level: string }>;
	itSkills: Array<{
		category: string;
		skills: Array<{
			name: string;
			level: number;
			duration: string;
			lastUsed: string;
		}>;
	}>;
}
