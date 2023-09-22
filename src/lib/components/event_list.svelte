<script lang="ts">
	import { FAKE_EVENTS } from '$lib/clubannounce/data/fake_events';
	import EventCard from './event_card.svelte';
</script>

{#each FAKE_EVENTS as event}
	<EventCard data={event} />
{/each}
<!-- 
<EventCard data={FAKE_EVENTS[1]} />
<EventCard data={FAKE_EVENTS[2]} /> -->
