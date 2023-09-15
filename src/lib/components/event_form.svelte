<script lang="ts">
	import type { ClubannounceEvent } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceEvent;
	export let isOpen: boolean;
	let startDate: Date;
	let endDate: Date;
	let startTime: Date;
	let endTime: Date;

	const CHAR_LIMIT = 100;

	$: characterCount = data.content.length;
</script>

<form class="event-card" class:active={isOpen}>
	<h2 class="mg-bottom">Create a New Event</h2>

	<div class="row">
		<div class="element-column">
			<label for="team">Choose Team Option*</label>
			<input type="text" name="team" bind:value={data.team} />
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

<style lang="scss">
	.event-card {
		z-index: 10;
		position: absolute;
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

		&.active {
			top: 50%;
			opacity: 1;
			visibility: visible;
		}

		& .row {
			display: flex;
			column-gap: 2rem;

			&.place-end {
				justify-self: end;
			}

			& .element-column {
				width: 100%;
			}
		}

		& .mg-bottom {
			margin-block-end: 1rem;
		}

		& h2 {
			margin-block: 0;
			font-size: 1.75rem;
		}

		& input[type='date'],
		input[type='time'] {
			background-color: var(--acm-canvas);
			font-size: 1rem;
			padding: 0.5rem 1rem;
			outline: none;
			border: none;
			text-align: right;
			width: 100%;
		}

		& textarea {
			width: 100%;
			height: 10rem;
			resize: none;
		}

		& input[type='text'],
		textarea {
			background-color: var(--acm-canvas);
			font-size: 1rem;
			padding: 0.5rem 1rem;
			outline: none;
			border: none;
			width: 100%;
			// text-align: left;
		}

		.save-event,
		.create-event {
			outline: none;
			border: none;
			cursor: pointer;
			border-radius: 0.5rem;
			font-size: 1rem;
		}

		.save-event {
			padding: 0.75rem;
			background-color: transparent;
			color: rgb(var(--acm-general-rgb));
		}

		.create-event {
			padding: 0.75rem 1.5rem;
			background-color: rgb(var(--acm-general-rgb));
			color: var(--acm-light);
			transition: all 0.2s ease-in;

			&:hover {
				opacity: 0.7;
			}
		}
	}

	.limit-exceeded {
		color: var(--acm-red);
	}
</style>
