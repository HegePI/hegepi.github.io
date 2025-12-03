<script lang="ts">
	import type { ResumePageData } from '$lib/types/resume';
	import SkillGrid from './SkillGrid.svelte';

	export let itSkills: ResumePageData['itSkills'];
</script>

<section id="it-skills">
	<a href="#it-skills"><h2 id="it-skills">IT Skills</h2></a>

	{#each itSkills as skillCategory, i (i)}
		<SkillGrid skills={skillCategory.skills} category={skillCategory.category} />
	{/each}
</section>

<style>
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
