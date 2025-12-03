<script lang="ts">
	import Education from '$lib/components/resume/Education.svelte';
	import ItSkills from '$lib/components/resume/ItSkills.svelte';
	import LanguageSkills from '$lib/components/resume/LanguageSkills.svelte';
	import Profile from '$lib/components/resume/Profile.svelte';
	import WorkExperience from '$lib/components/resume/WorkExperience.svelte';

	let { data } = $props();
</script>

<title>My portfolio - Resume</title>
<meta name="description" content="Resume page of my portfolio website." />

<div class="resume">
	<header>
		<a href="#contact-info"><h1 id="contact-info">Heikki Pulli</h1></a>
	</header>

	<Profile description={data.profile.description} />

	<WorkExperience workExperience={data.workExperience} />

	<Education education={data.education} />

	<LanguageSkills languageSkills={data.languageSkills} />

	<ItSkills itSkills={data.itSkills} />
</div>

<style>
	.resume {
		max-width: 850px;
		padding: 40px;
		margin: 0 auto;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}

	header h1 {
		margin: 0 0 5px;
		font-size: 36px;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media print {
		:global(main > *:not(.resume)) {
			display: none !important;
		}

		.resume {
			width: 100%;
			padding: 0;
			margin: 0;
			box-shadow: none;
			border-radius: 0;
		}
	}
</style>
