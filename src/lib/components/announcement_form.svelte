<script lang="ts">
	// TODO(Ethan): Figure out how to import from $lib/clubannounce.
	// import type { AnnouncementForm } from '$lib/clubannounce/clubannounce';

	// export let data: ClubannounceEvent;

	/**
	 * Render the card instead of the HTML form.
	 */
	export let readonly = false;

	let title = '';
	let content = '';
	let startDate: Date;
</script>

<form class="announcement-card">
	<h2>Create a New Announcement</h2>
	<div class="column">
		<label for="title">Title</label>
		<input name="title" type="text" bind:value={title} />
	</div>

	<div class="column">
		<textarea name="content" bind:value={content} />
	</div>

	<div class="column col-right">
		<button class="save-event" type="submit">Save</button>
		<button class="create-event" type="submit">Create</button>
	</div>
</form>

<style lang="scss">
	.announcement-card {
		position: fixed;
		left: 50%;
		transform: translate(-50%, 0);
		display: grid;
		flex-direction: column;
		width: min(50em, 90vw);
		padding: 2rem 2rem 0;
		background-color: var(--acm-light);

		& .column {
			margin-block-end: 2rem;
			&.col-right {
				justify-self: end;
			}
		}

		& h2 {
			margin-block: 0;
			font-size: 1.75rem;
			margin-block-end: 1rem;
		}

		& input[type='date'] {
			background-color: var(--acm-canvas);
			font-size: 1rem;
			padding: 1rem;
			outline: none;
			border: none;
			text-align: right;
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
			font-size: 1rem;
			border-radius: 0.5rem;
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
