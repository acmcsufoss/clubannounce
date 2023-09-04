<script lang="ts">
	// TODO(Ethan): Figure out how to import from $lib/clubannounce.
	// import type { AnnouncementForm } from '$lib/clubannounce/clubannounce';

	// export let data: ClubannounceEvent;

	/**
	 * Render the card instead of the HTML form.
	 */
	export let readonly = false;
	const CHAR_LIMIT = 2000;

	let title = '';
	let content = '';
	let startDate: Date;

	$: characterCount = title.length + content.length;
</script>

<form class="announcement-card">
	<h2>Create a New Announcement</h2>
	<div class="column">
		<label for="title">Title</label>
		<input name="title" type="text" bind:value={title} />
	</div>

	<div class="column">
		<textarea name="content" bind:value={content} placeholder="Start typing here..." />
	</div>

	<div class="column col-right">
		<span class:limit-exceeded={characterCount > CHAR_LIMIT}>{characterCount}</span>/2000 characters
	</div>

	<div class="column col-right">
		<button class="save" type="submit">Save</button>
		<button class="create" type="submit">Create</button>
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

		.save,
		.create {
			outline: none;
			border: none;
			cursor: pointer;
			font-size: 1rem;
			border-radius: 0.5rem;
		}

		.save {
			padding: 0.75rem;
			background-color: transparent;
			color: rgb(var(--acm-general-rgb));
		}

		.create {
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
