<script lang="ts">
	// TODO(Ethan): Figure out how to import from $lib/clubannounce.
	import type { ClubannounceEvent } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceEvent;

	/**
	 * Render the card instead of the HTML form.
	 */
	export let readonly = false;
</script>

EventForm
