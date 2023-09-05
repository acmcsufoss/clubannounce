<script lang="ts">
	export let isOpen: boolean;
	let startDate: Date;
</script>

<form class="event-card" class:active={isOpen}>
	<h2>Create a New Event</h2>
	<div class="column">
		<label for="start-time">Start Date</label>
		<input name="start-time" type="date" bind:value={startDate} />

		<label for="start-time">Start Date</label>
		<input name="start-time" type="date" bind:value={startDate} />
	</div>
	<div class="column">
		<label for="start-time">Start Date</label>
		<input name="start-time" type="date" bind:value={startDate} />

		<label for="start-time">Start Date</label>
		<input name="start-time" type="date" bind:value={startDate} />
	</div>
	<div class="column col-right">
		<button class="save-event" type="submit">Save</button>
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
		display: flex;
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

		& .column {
			margin-block-end: 2rem;
			&.col-right {
				justify-self: end;
			}
		}

		& h2 {
			margin-block: 0;
			margin-block-end: 2rem;
		}

		& input[type='date'] {
			background-color: var(--acm-canvas);
			font-size: 1rem;
			padding: 1rem;
			outline: none;
			border: none;
			text-align: right;
			width: 35%;
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
</style>
