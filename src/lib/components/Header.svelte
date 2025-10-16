<script lang="ts">
	import DarkModeSwitch from './DarkModeSwitch.svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<main>
	<header class="homepage-header">
		<div class="header-top">
			<div class="homepage-title">Homepage</div>
			<div class="switch-slot"><DarkModeSwitch /></div>
		</div>
		<div class="header-bottom">
			<div class="breadcrumbs-row">
				<Breadcrumbs />
			</div>
		</div>
	</header>
</main>

<style>
	.homepage-header {
		width: 100%;
		top: 0;
		left: 0;
		z-index: 101;
		display: flex;
		flex-direction: column;
	}

	.header-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.header-bottom {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.homepage-title {
		font-size: 2rem;
		font-weight: bold;
		color: #333;
		letter-spacing: 1px;
		margin: 0;
		font-family:
			'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
			sans-serif;
		padding: 0.5rem;
	}

	.switch-slot {
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}

	.breadcrumbs-row {
		flex: 1;
		display: flex;
		align-items: flex-start;
		padding: 0.5rem;
	}
</style>
