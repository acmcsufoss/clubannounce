<script lang="ts">
	import type { ClubannounceAnnouncement } from '$lib/clubannounce/clubannounce';

	export let data: ClubannounceAnnouncement;
</script>

<div class="column card">
	<div class="team-icon-wrapper">
		<img class="logo" src="/assets/badges/oss.svg" alt="OSS Team Badge" />
	</div>

	<div class="column">
		<div>
			<h3>OSS Summer Hackathon</h3>
			<div>
				<div>Sept 23: 5:00pm - 6:00pm</div>
				<div>CS 202</div>
			</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam accusantium quasi
			assumenda, optio facere placeat similique exercitationem nam fuga rerum excepturi quidem
			eveniet, consectetur nulla provident? Nisi, inventore quia.
		</p>

		<button class="join">JOIN</button>
	</div>

	<!-- <div>Time</div> -->
</div>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		gap: 1rem;
		max-width: min(50vw, 90vw);
		padding: 1rem 2rem;
		background-color: var(--acm-canvas);
		border-radius: 0.5rem;
		box-shadow: var(--nav-shadow);
		margin-bottom: 1rem;

		& .column {
			& div {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				& div {
					flex-direction: column;
					align-self: end;
				}
			}
		}

		& .team-icon-wrapper {
			& .logo {
				width: 64px;
			}
		}

		& .join {
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
	}
</style>
