<script lang="ts">
	import type { ClubannounceEvent } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceEvent;
	export let isOpen: boolean;
	let startDate: Date;
	let endDate: Date;
	let startTime: Date;
	let endTime: Date;

	let isTeamSelectionOpen = false;

	const CHAR_LIMIT = 100;
	const teams: string[] = ['AI', 'Algo', 'Design', 'Dev', 'Game Dev', 'General', 'ICPC', 'OSS'];

	const selectTeam = (team: string) => {
		data.team = team;
	};

	$: characterCount = data.content.length;
</script>

<form class="event-card" class:active={isOpen}>
	<h2 class="mg-bottom">Create a New Event</h2>

	<div class="row">
		<div class="element-column team-selection">
			<label for="team">Choose Team Option*</label>
			<div class="team-options" class:team-options-open={isTeamSelectionOpen}>
				{#each teams as team}
					<span on:focus={() => selectTeam(team)}>{team}</span>
				{/each}
			</div>
			<input
				type="text"
				name="team"
				bind:value={data.team}
				on:focus={() => (isTeamSelectionOpen = !isTeamSelectionOpen)}
				on:blur={() => (isTeamSelectionOpen = false)}
			/>
		</div>

		<div class="element-column">
			<label for="location">Where*</label>
			<input type="text" name="location" bind:value={data.location.value} />
		</div>
	</div>

	<div class="row">
		<div class="element-column">
			<label for="start-date">Start Date*</label>
			<input name="start-time" type="date" bind:value={startDate} />
		</div>

		<div class="element-column">
			<label for="end-date">End Date*</label>
			<input name="end-date" type="date" bind:value={endDate} />
		</div>
	</div>

	<div class="row mg-bottom">
		<div class="element-column">
			<label for="start-time">Start Time*</label>
			<input name="start-time" type="time" bind:value={startTime} />
		</div>

		<div class="element-column">
			<label for="end-time">End Time*</label>
			<input name="end-time" type="time" bind:value={endTime} />
		</div>
	</div>

	<textarea name="content" bind:value={data.content} placeholder="Start typing here..." />

	<div class="row place-end mg-bottom">
		<div class="element-column">
			<span class:limit-exceeded={characterCount > CHAR_LIMIT}>{characterCount}</span>/{CHAR_LIMIT} characters
		</div>
	</div>

	<div class="row place-end">
		<button class="save-event" type="submit" on:click={() => console.log(data)}>Save</button>
		<button class="create-event" type="submit">Create</button>
	</div>
</form>

<style>
	.event-card {
		z-index: 10;
		position: fixed;
		left: 50%;
		top: 55%;
		transform: translate(-50%, -50%);
		display: grid;
		flex-direction: column;
		width: min(50em, 90vw);
		padding: 2rem;
		background-color: var(--acm-light);
		opacity: 0;
		visibility: hidden;
		transition: all 0.125s ease-in;
	}

	.event-card.active {
		top: 50%;
		opacity: 1;
		visibility: visible;
	}

	.event-card .row {
		display: flex;
		column-gap: 2rem;
	}

	.event-card .row.place-end {
		justify-self: end;
	}

	.event-card .row .element-column {
		width: 100%;
	}

	.event-card .mg-bottom {
		margin-block-end: 1rem;
	}

	.event-card h2 {
		margin-block: 0;
		font-size: 1.75rem;
	}

	.event-card input[type='date'],
	.event-card input[type='time'] {
		background-color: var(--acm-canvas);
		font-size: 1rem;
		padding: 0.5rem 1rem;
		outline: none;
		border: none;
		text-align: right;
		width: 100%;
	}

	.event-card textarea {
		width: 100%;
		height: 10rem;
		resize: none;
	}

	.event-card input[type='text'],
	.event-card textarea {
		background-color: var(--acm-canvas);
		font-size: 1rem;
		padding: 0.5rem 1rem;
		outline: none;
		border: none;
		width: 100%;
	}

	.event-card .save-event,
	.event-card .create-event {
		outline: none;
		border: none;
		cursor: pointer;
		border-radius: 0.5rem;
		font-size: 1rem;
	}

	.event-card .save-event {
		padding: 0.75rem;
		background-color: transparent;
		color: var(--acm-darker);
	}

	.event-card .create-event {
		padding: 0.75rem 1.5rem;
		background-color: var(--acm-darker);
		color: var(--acm-light);
		transition: all 0.2s ease-in;
	}

	.event-card .create-event:hover {
		opacity: 0.7;
	}

	.limit-exceeded {
		color: var(--acm-red);
	}

	.team-selection {
		position: relative;
	}

	.team-options {
		cursor: pointer;
		position: absolute;
		display: none;
		flex-direction: column;
		width: 100%;
		padding: 0.5rem 1rem;
		background-color: rgb(215, 215, 215);
	}

	.team-options > * {
		transition: opacity 0.125s ease;
	}

	.team-options :hover {
		opacity: 0.5;
	}

	.team-options-open {
		display: flex;
	}
</style>
