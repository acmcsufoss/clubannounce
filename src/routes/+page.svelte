<script>
	import AnnouncementForm from '$lib/components/announcement_form.svelte';
	import EventForm from '$lib/components/event_form.svelte';

	let createEventMode = false;
	let createAnnouncementMode = false;
</script>

<h1>Dashboard with the list of announcements and events.</h1>
<h2>Events</h2>
<button class="create" on:click={() => (createEventMode = !createEventMode)}
	>Create New Event</button
>
<h2>Announcements</h2>
<button class="create" on:click={() => (createAnnouncementMode = !createAnnouncementMode)}
	>Create New Announcement</button
>
<AnnouncementForm bind:isOpen={createAnnouncementMode} />

<EventForm bind:isOpen={createEventMode} />

<div
	class="full-window-overlay"
	class:active={createAnnouncementMode || createEventMode}
	on:click={() => ((createAnnouncementMode = false), (createEventMode = false))}
	on:keydown={() => ((createAnnouncementMode = false), (createEventMode = false))}
	role="button"
	aria-pressed="false"
	tabindex="0"
/>

<!-- <EventForm /> -->

<style lang="scss">
	.create {
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
	.full-window-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(213, 213, 213, 0.25);
		z-index: 3;
		transition: 0.25s;
		opacity: 0;
		visibility: hidden;

		&.active {
			opacity: 1;
			visibility: visible;
		}
	}
</style>
