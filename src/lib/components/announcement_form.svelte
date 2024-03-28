<script lang="ts">
	// TODO(Ethan): Figure out how to import from $lib/clubannounce.
	import type { ClubannounceAnnouncement } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceAnnouncement;

	/**
	 * Render the card instead of the HTML form.
	 */
	export let readonly = false;
	const CHAR_LIMIT = 100;

	export let isOpen: boolean;

	let title = '';
	let content = '';

	$: characterCount = title.length + data.content.length;
</script>

<form class="announcement-card" class:active={isOpen}>
	<h2 class="mg-bottom">Create a New Announcement</h2>

	<div class="mg-bottom">
		<label for="title">Title</label>
		<input name="title" type="text" bind:value={title} />
	</div>

	<textarea name="content" bind:value={content} placeholder="Start typing here..." />

	<div class="place-end mg-bottom">
		<span class:limit-exceeded={characterCount > CHAR_LIMIT}>{characterCount}</span>/{CHAR_LIMIT} characters
	</div>

	{#if !readonly}
		<div class="place-end">
			<button class="save" type="submit">Save</button>
			<button class="create" type="submit">Create</button>
		</div>
	{/if}
</form>

<style>
	.announcement-card {
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

	.announcement-card.active {
		top: 50%;
		opacity: 1;
		visibility: visible;
	}

	.announcement-card .place-end {
		justify-self: end;
	}

	.announcement-card .mg-bottom {
		margin-block-end: 1rem;
	}

	.announcement-card h2 {
		margin-block: 0;
		font-size: 1.75rem;
	}

	.announcement-card textarea {
		width: 100%;
		height: 10rem;
		resize: none;
	}

	.announcement-card input[type='text'],
	.announcement-card textarea {
		background-color: var(--acm-canvas);
		font-size: 1rem;
		padding: 0.5rem 1rem;
		outline: none;
		border: none;
		width: 100%;
	}

	.announcement-card .save,
	.announcement-card .create {
		outline: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		border-radius: 0.5rem;
	}

	.announcement-card .save {
		padding: 0.75rem;
		background-color: transparent;
		color: rgb(var(--acm-general-rgb));
	}

	.announcement-card .create {
		padding: 0.75rem 1.5rem;
		background-color: rgb(var(--acm-general-rgb));
		color: var(--acm-light);
		transition: all 0.2s ease-in;
	}

	.announcement-card .create:hover {
		opacity: 0.7;
	}

	.limit-exceeded {
		color: var(--acm-red);
	}
</style>
