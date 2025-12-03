<script lang="ts">
	import type { ResumePageData } from '$lib/types/resume';
	type Skill = ResumePageData['itSkills'][number]['skills'][number];

	export let skills: Skill[];
	export let category: string;
</script>

<a href="#{category.toLowerCase().replace(/ /g, '-')}"
	><h3 id={category.toLowerCase().replace(/ /g, '-')}>{category}</h3></a
>
<div class="skill-grid">
	<div class="heading">{category.slice(0, -1)}</div>
	<div class="heading">Level</div>
	<div class="heading">How long used</div>
	<div class="heading">Last Used</div>
	{#each skills as skill, i (i)}
		<div>{skill.name}</div>
		<div>{skill.level}</div>
		<div>{skill.duration}</div>
		<div>{skill.lastUsed}</div>
	{/each}
</div>

<style>
	.skill-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		row-gap: 6px;
		margin-top: 10px;
		margin-bottom: 40px;
		border-bottom: solid 1px #ddd;
		font-size: 14px;
	}

	.skill-grid .heading {
		font-weight: bold;
		border-bottom: solid 1px #ddd;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	h3 {
		margin-bottom: 5px;
	}
</style>
