<script lang="ts">
	import type { ResumePageData } from '$lib/types/resume';

	export let workExperience: ResumePageData['workExperience'];
</script>

<section id="work-experience">
	<a href="#work-experience"><h2>Work Experience</h2></a>

	{#each workExperience as item, i (i)}
		<div class="item" id={item.company.toLowerCase().replace(/ /g, '-')}>
			<a href="#{item.company.toLowerCase().replace(/ /g, '-')}"><h3>{item.company}</h3></a>
			<span>{item.startDate} – {item.endDate}</span>
			<p><strong>{item.position}</strong></p>
			<ul>
				{#each item.responsibilities as responsibility, i (i)}
					<li>{responsibility}</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.item span {
		font-size: 14px;
		font-weight: bold;
	}

	ul {
		padding-left: 20px;
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
