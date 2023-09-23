<script lang="ts">
	import { FAKE_EVENTS } from '$lib/clubannounce/data/fake_events';
	import EventCard from './event_card.svelte';

	const tempTitles = ['DALL-E Workshop', 'Intro to Stacks and Queues', 'Open Source Team Kickoff'];
</script>

{#each FAKE_EVENTS as event, i}
	<EventCard title={tempTitles[i]} data={event} />
{/each}
<!-- 
<EventCard data={FAKE_EVENTS[1]} />
<EventCard data={FAKE_EVENTS[2]} /> -->
