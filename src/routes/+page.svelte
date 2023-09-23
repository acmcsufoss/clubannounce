<script lang="ts">
	import AnnouncementForm from '$lib/components/announcement_form.svelte';
	import EventForm from '$lib/components/event_form.svelte';
	import {
		ClubannounceLocationType,
		type ClubannounceAnnouncement,
		type ClubannounceEvent,
		type ClubannounceLocation
	} from '$lib/clubannounce/clubannounce';
	import EventList from '$lib/components/event_list.svelte';

	let announcementDummy: ClubannounceAnnouncement = {
		id: '12',
		content: ''
	};

	const location: ClubannounceLocation = {
		type: ClubannounceLocationType.ROOM_ID,
		value: 'CS 202'
	};

	let eventDummy: ClubannounceEvent = {
		id: '12',
		content: '',
		location: location,
		startDatetime: new Date(),
		endDatetime: new Date(),
		team: 'Algo'
	};

	let createEventMode = false;
	let createAnnouncementMode = false;
</script>

<main class="app">
	<h2>Events</h2>
	<EventList />
	<div class="place-end">
		<button class="create" on:click={() => (createEventMode = !createEventMode)}>
			Create New Event
		</button>
	</div>
	<h2>Announcements</h2>
	<div class="place-end">
		<button class="create" on:click={() => (createAnnouncementMode = !createAnnouncementMode)}
			>Create New Announcement
		</button>
	</div>
	<AnnouncementForm bind:data={announcementDummy} bind:isOpen={createAnnouncementMode} />

	<EventForm bind:data={eventDummy} bind:isOpen={createEventMode} />

	<div
		class="full-window-overlay"
		class:active={createAnnouncementMode || createEventMode}
		on:click={() => ((createAnnouncementMode = false), (createEventMode = false))}
		on:keydown={() => ((createAnnouncementMode = false), (createEventMode = false))}
		role="button"
		aria-pressed="false"
		tabindex="0"
	/>
</main>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// width: fit-content;

		& h2 {
			font-size: 2rem;
		}

		// & .place-end {
		// 	margin-left: auto;
		// }
	}

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
