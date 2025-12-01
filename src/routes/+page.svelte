<script lang="ts">
	import { resolve } from '$app/paths';
	import Page from '$lib/components/Page.svelte';
</script>

<title>Home - My Portfolio</title>

<meta
	name="description"
	content="Heikki Pullis portfolio. Here you can find information about my projects, education, and hobbies."
/>

<Page>
	<article>
		<section>
			<h1>Welcome to my portfolio!</h1>

			<p>
				Here I have are collected all the relevanat stuff which tells the story of me as a
				developer.
			</p>
		</section>
		<section>
			<h2><a href={resolve('/projects')}>Projects</a></h2>
			<p>
				In the projects page I have listed my personal projects that I have started. Not all
				projects are finished.
			</p>
		</section>
		<section>
			<h2><a href={resolve('/education')}>Education</a></h2>
			<p>In the education page are listed notable highlights about my education.</p>
		</section>

		<section>
			<h2><a href={resolve('/hobbies')}>Hobbies</a></h2>
			<p>In the hobbies page are listed some of my hobbies.</p>
		</section>
	</article>
</Page>
