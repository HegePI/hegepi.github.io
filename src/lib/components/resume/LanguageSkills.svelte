<script lang="ts">
	import type { ResumePageData } from '$lib/types/resume';

	export let languageSkills: ResumePageData['languageSkills'];
</script>

<section id="language-skills">
	<a href="#language-skills"><h2>Language Skills</h2></a>
	<div class="lang-grid">
		{#each languageSkills as skill, i (i)}
			<div class="lang"><strong>{skill.language}:</strong></div>
			<div class="level">{skill.level}</div>
		{/each}
	</div>
</section>

<style>
	.lang-grid {
		display: grid;
		grid-template-columns: 150px 1fr;
		row-gap: 6px;
		margin-top: 10px;
	}

	.lang-grid .lang {
		font-weight: bold;
	}

	.lang-grid .level {
		font-size: 14px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	h2 {
		border-bottom: 2px solid #ddd;
		padding-bottom: 5px;
		margin-top: 40px;
	}
</style>
