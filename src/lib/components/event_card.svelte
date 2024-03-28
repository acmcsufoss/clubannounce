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

<div class="card">
	<div class="main">
		<div class="header-wrapper">
			<img class="logo" src="/assets/badges/{team.toLowerCase()}.svg" alt="{team} Team Badge" />
			<div>
				<h3>{title}</h3>
			</div>
		</div>

		<div class="offset">
			<div class="event-info">
				<img class="sm-icon" src="/assets/time-icon.png" alt="Time Icon" />
				&nbsp;
				<time>5:00pm - 6:00pm</time>
				&nbsp;&nbsp;
				<span>
					<img class="sm-icon" src="/assets/location-icon.png" alt="Location Icon" />
					{data.location.value}
				</span>
			</div>

			<div>
				<p>{data.content}</p>
			</div>
		</div>
	</div>

	<div class="place-end">
		<Button content="RSVP" />
	</div>
	<!-- <div>Time</div> -->
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: min(45rem, 80vw);
		padding: 1rem;
		background-color: var(--acm-light-blue);
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	.card h3 {
		font-size: var(--size-md);
	}

	.card .header-wrapper {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		align-items: center;
		justify-content: start;
		gap: 1rem;
	}

	.card .header-wrapper .logo {
		width: 3.5rem;
	}

	.event-info {
		display: flex;
		align-items: center;
	}

	.event-info time,
	.event-info span {
		font-weight: 600;
	}

	p {
		margin-block: 0.5rem;
	}

	.sm-icon {
		width: 1rem;
	}

	@media screen and (min-width: 768px) {
		.card {
			flex-direction: row;
		}

		.card .main .offset {
			margin-left: 4.5rem;
			margin-top: -0.75rem;
		}
	}
</style>
