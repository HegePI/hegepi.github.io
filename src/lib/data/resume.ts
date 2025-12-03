import type { ResumePageData } from '$lib/types/resume';

export const resumeData: ResumePageData = {
	profile: {
		description:
			'I graduated in the summer of 2025 from the University of Helsinki with a Master’s degree in Computer Science, focusing on developing and utilizing AI/ML technologies as part of software systems. I have experience working both independently and as part of a team, and I enjoy developing solutions that integrate AI/ML components, particularly in developer or MLOps roles.'
	},
	workExperience: [
		{
			company: 'Roima Intelligence',
			position: 'AI/ML trainee, Software developer',
			startDate: '2023',
			endDate: '2025',
			responsibilities: [
				'Integrating AI/ML technologies into ERP systems, especially LLM-based solutions.',
				'Completed master’s thesis while working.'
			]
		},
		{
			company: 'University of Helsinki, RAGE Research Group',
			position: 'Software Developer / full stack developer',
			startDate: '2019',
			endDate: '2023',
			responsibilities: ['Developed course material platform for university use.']
		}
	],
	education: [
		{
			institution: 'University of Helsinki',
			degree: 'Master’s Programme in Computer Science',
			startDate: '2023',
			endDate: '2025',
			thesis: 'Ensuring and Monitoring the Correctness of RAG Systems',
			grade: '4/5'
		}
	],
	languageSkills: [
		{ language: 'Finnish', level: 'Native' },
		{ language: 'English', level: 'Excellent' },
		{ language: 'Swedish', level: 'Good' },
		{ language: 'French', level: 'Good' }
	],
	itSkills: [
		{
			category: 'Programming Languages',
			skills: [
				{ name: 'Python', level: 4, duration: '4 yrs', lastUsed: '2025' },
				{ name: 'R', level: 2, duration: '1 yr', lastUsed: '2023' },
				{ name: 'Java', level: 3, duration: '2 yrs', lastUsed: '2021' },
				{ name: 'JS/TS', level: 4, duration: '4 yrs', lastUsed: '2024' },
				{ name: 'Rust', level: 3, duration: '3 yrs', lastUsed: '2023' }
			]
		},
		{
			category: 'Databases',
			skills: [
				{ name: 'PostgreSQL', level: 4, duration: '4 yrs', lastUsed: '2025' },
				{ name: 'MongoDB', level: 3, duration: '2 yrs', lastUsed: '2023' },
				{ name: 'Redis', level: 3, duration: '1 yr', lastUsed: '2023' }
			]
		},
		{
			category: 'Frontend Frameworks',
			skills: [
				{ name: 'React', level: 4, duration: '6 yrs', lastUsed: '2024' },
				{ name: 'Next.js', level: 3, duration: '3 yrs', lastUsed: '2024' },
				{ name: 'Svelte', level: 2, duration: '1 yr', lastUsed: '2025' }
			]
		},
		{
			category: 'Server OS',
			skills: [{ name: 'Linux', level: 3, duration: '1 yr', lastUsed: '2023' }]
		},
		{
			category: 'CI/CD',
			skills: [
				{ name: 'GitLab CI/CD', level: 4, duration: '2 yrs', lastUsed: '2025' },
				{ name: 'GitHub Actions', level: 3, duration: '3 yrs', lastUsed: '2023' }
			]
		},
		{
			category: 'Container Technologies',
			skills: [
				{ name: 'Docker', level: 4, duration: '5 yrs', lastUsed: '2025' },
				{ name: 'Kubernetes', level: 4, duration: '4 yrs', lastUsed: '2024' },
				{ name: 'Helm', level: 3, duration: '2 yrs', lastUsed: '2024' },
				{ name: 'Skaffold', level: 4, duration: '4 yrs', lastUsed: '2024' }
			]
		},
		{
			category: 'Infrastructure as Code',
			skills: [
				{ name: 'Terraform', level: 3, duration: '1 yr', lastUsed: '2025' },
				{ name: 'Ansible', level: 1, duration: '1 yr', lastUsed: '2023' }
			]
		},
		{
			category: 'Cloud Platforms',
			skills: [
				{ name: 'Azure', level: 3, duration: '2 yrs', lastUsed: '2025' },
				{ name: 'GCP', level: 2, duration: '1 yr', lastUsed: '2023' }
			]
		},
		{
			category: 'Libraries for LLM App Development',
			skills: [
				{ name: 'LangChain', level: 4, duration: '2 yrs', lastUsed: '2024' },
				{ name: 'Haystack', level: 3, duration: '1 yr', lastUsed: '2025' }
			]
		},
		{
			category: 'MLOps Tools',
			skills: [
				{ name: 'MLflow', level: 4, duration: '2 yrs', lastUsed: '2025' },
				{ name: 'Kubeflow', level: 3, duration: '1 yr', lastUsed: '2023' },
				{ name: 'KServe', level: 3, duration: '1 yr', lastUsed: '2023' },
				{ name: 'Azure ML', level: 3, duration: '1 yr', lastUsed: '2025' },
				{ name: 'Azure AI Studio', level: 4, duration: '2 yrs', lastUsed: '2025' }
			]
		},
		{
			category: 'ML Libraries',
			skills: [
				{ name: 'Scikit-learn', level: 4, duration: '3 yrs', lastUsed: '2025' },
				{ name: 'PyTorch', level: 3, duration: '1 yr', lastUsed: '2023' }
			]
		}
	]
};
