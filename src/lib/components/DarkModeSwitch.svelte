<script lang="ts">
	import { themeState } from '$lib/stores/themeState.svelte';

	import moon from '$lib/assets/moon.svg';
	import sun from '$lib/assets/sun.svg';

	function toggleDarkMode() {
		themeState.theme = themeState.theme === 'dark' ? 'light' : 'dark';
	}
</script>

<label class="switch">
	<input
		type="checkbox"
		on:click={toggleDarkMode}
		checked={themeState.theme === 'dark'}
		id="dark-mode-switch"
		aria-label="dark mode switch"
	/>
	<span class="slider round">
		<span class="knob">
			<img class="icon sun" src={sun} alt="Sun icon" />
			<img class="icon moon" src={moon} alt="Moon icon" /></span
		>
	</span>
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Invisible checkbox */
	.switch input {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	/* Track */
	.slider {
		position: absolute;
		inset: 0;
		background-color: #ccc;
		transition: 0.4s;
		border-radius: 34px;
	}

	/* Knob (moved from :before to custom element so we can place icons inside it) */
	.knob {
		position: absolute;
		width: 26px;
		height: 26px;
		left: 4px;
		top: 4px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transition: transform 0.4s ease;
	}

	/* When the switch is ON, move the knob */
	input:checked + .slider .knob {
		transform: translateX(26px);
	}

	/* Track highlight on ON */
	input:checked + .slider {
		background-color: #2196f3;
	}

	/* Icons inside the knob */
	.icon {
		position: absolute;
		width: 18px;
		height: 18px;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	/* Sun visible when off */
	.sun {
		opacity: 1;
	}

	/* Moon hidden when off */
	.moon {
		opacity: 0;
	}

	/* Toggle visibility on checked */
	input:checked + .slider .sun {
		opacity: 0;
	}

	input:checked + .slider .moon {
		opacity: 1;
	}
</style>
