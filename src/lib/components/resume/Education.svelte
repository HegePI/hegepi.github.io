<script lang="ts">
	import type { ResumePageData } from '$lib/types/resume';

	export let education: ResumePageData['education'];
</script>

<section id="education">
	<a href="#education"><h2>Education</h2></a>

	{#each education as item, i (i)}
		<div class="item" id={item.institution.toLowerCase().replace(/[, ]+/g, '-')}>
			<a href="#{item.institution.toLowerCase().replace(/ /g, '-')}"><h3>{item.institution}</h3></a>
			<p><strong>{item.degree}</strong></p>
			{#if item.thesis}
				<p>
					Thesis: <i>{item.thesis}</i>
					{#if item.grade}(grade {item.grade}){/if}
				</p>
			{/if}
		</div>
	{/each}
</section>

<style>
	.item p {
		margin: 5px 0;
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
