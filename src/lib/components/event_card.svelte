<script lang="ts">
	import type { ClubannounceEvent } from '$lib/clubannounce/clubannounce';
	import Button from './button.svelte';

	export let data: ClubannounceEvent;
	export let title: string;

	let team = data.team + '-badge';
	// $: startDateString = data.startDatetime.toString();
	// $: endDateString = data.endDatetime;
	// $: startTime = startDateString.substring(0, startDateString.indexOf('GMT'));
	// $: endTime = data.endDatetime.getHours() + ':' + data.endDatetime.getMinutes();
</script>

<div class="column card">
	<div class="header-wrapper">
		<img class="logo" src="/assets/badges/{team.toLowerCase()}.svg" alt="{team} Team Badge" />
		<div>
			<h3>{title}</h3>
		</div>
	</div>

	<div>
		<time>{data.startDatetime} - {data.endDatetime}</time>
		<div>
			<span>
				<img class="sm-icon" src="/assets/location-icon.png" alt="Location Icon" />
				{data.location.value}
			</span>
		</div>
	</div>

	<div class="column">
		<p>{data.content}</p>

		<div class="place-end">
			<Button content="RSVP" />
			<button class="drop-menu">
				<img class="md-icon" src="/assets/svg/three-dots.svg" alt="Event Card Dropdown" />
			</button>
		</div>
	</div>

	<!-- <div>Time</div> -->
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		// align-items: center;
		gap: 0.5rem;
		max-width: min(45rem, 80vw);
		padding: 1rem;
		background-color: var(--acm-light-blue);
		border-radius: 0.5rem;
		margin-bottom: 1rem;

		& .column {
			& div {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				& div,
				time {
					flex-direction: column;
					align-self: end;
					text-align: right;
				}
			}
			& .place-end {
				margin-left: auto;
			}
		}

		& h3 {
			font-size: var(--size-md);
		}

		& .header-wrapper {
			display: grid;
			grid-template-columns: 3.5rem 1fr;
			align-items: center;
			justify-content: start;
			gap: 1rem;
			& .logo {
				width: 3.5rem;
			}
		}

		& .drop-menu {
			outline: none;
			border: none;
			cursor: pointer;
			transition: all 0.2s ease-in;
		}

		& .drop-menu {
			margin-inline-start: 0.5rem;
			padding: 0;
			border-radius: 50%;
			width: 3rem;
			aspect-ratio: 1;
			background-color: transparent;

			&:hover {
				background-color: var(--acm-canvas);
			}
		}
	}

	.sm-icon {
		width: 1rem;
	}

	.md-icon {
		width: 1.5rem;
	}

	@media screen and (min-width: 768px) {
		.card {
			flex-direction: row;
		}
	}
</style>
