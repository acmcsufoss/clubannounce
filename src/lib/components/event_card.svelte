<script lang="ts">
	import type { ClubannounceEvent } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceEvent;

	let team = data.team + (data.team !== 'OSS' ? '-team' : '');
	// $: startDateString = data.startDatetime.toString();
	// $: endDateString = data.endDatetime;
	// $: startTime = startDateString.substring(0, startDateString.indexOf('GMT'));
	// $: endTime = data.endDatetime.getHours() + ':' + data.endDatetime.getMinutes();
</script>

<div class="column card">
	<div class="team-icon-wrapper">
		<img class="logo" src="/assets/badges/{team.toLowerCase()}.svg" alt="{team} Team Badge" />
	</div>

	<div class="column">
		<div>
			<h3>OSS Summer Hackathon</h3>
			<div>
				<time>{data.startDatetime} - {data.endDatetime}</time>
				<div>{data.location.value}</div>
			</div>
		</div>
		<p>{data.content}</p>

		<div class="place-end">
			<button class="join place-end">JOIN</button>
		</div>
	</div>

	<!-- <div>Time</div> -->
</div>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		gap: 1rem;
		max-width: min(50rem, 90vw);
		padding: 1rem 2rem;
		background-color: var(--acm-light);
		border-radius: 0.5rem;
		box-shadow: var(--nav-shadow);
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
			font-size: 1.5rem;
		}

		& .team-icon-wrapper {
			& .logo {
				width: 3.5rem;
			}
		}

		& .join {
			outline: none;
			border: none;
			cursor: pointer;
			padding: 0.75rem 1.5rem;
			border-radius: 0.5rem;
			font-size: 1rem;
			background-color: rgb(var(--acm-general-rgb));
			color: var(--acm-light);
			transition: all 0.2s ease-in;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>
