<script lang="ts">
	export let description: string;
</script>

<section id="profile">
	<a href="#profile"><h2>Profile</h2></a>
	<p>
		{description}
	</p>
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
