<script lang="ts">
	import type { ClubannounceAnnouncement } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceAnnouncement;
</script>

<div class="card">
	<div class="team-icon-wrapper">
		<img class="logo" src="/assets/badges/oss.svg" alt="OSS Team Badge" />
	</div>

	<div>
		<h3>OSS Summer Hackathon</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam accusantium quasi
			assumenda, optio facere placeat similique exercitationem nam fuga rerum excepturi quidem
			eveniet, consectetur nulla provident? Nisi, inventore quia.
		</p>
	</div>

	<div>Time</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		gap: 1rem;
		max-width: min(50vw, 90vw);
		padding: 1rem;
		background-color: var(--acm-canvas);
		border-radius: 0.5rem;
		box-shadow: var(--nav-shadow);
		margin-bottom: 1rem;

		& .team-icon-wrapper {
			& .logo {
				width: 64px;
			}
		}
	}
</style>
