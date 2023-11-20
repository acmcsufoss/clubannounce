<script lang="ts">
	import Button from './button.svelte';

	const capybaraEmotes = ['capyexcite_', 'capyvibe', 'capylove', 'capysmart'];
</script>

<section>
	<h1>Join our eventful workshops</h1>
	<p>
		Our club organizes various events every semester, including workshops, socials, hackathons, and
		more! All events are open to everyone, regardless of major or background experience.
	</p>

	{#each capybaraEmotes as capybaraEmote, i}
		<div class="capy-emote capy-emote-{i}">
			<img src="/assets/capybara/{capybaraEmote}.png" alt="Emote" />
		</div>
	{/each}

	<div class="buttons">
		<Button content="Google Calendar" />
		<Button content="Outlook Calendar" />
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: 6rem;
		padding-inline: 0.5rem;
		width: 100%;
		background-color: var(--acm-light-blue);

		& h1 {
			text-align: center;
			color: var(--acm-darker);
			font-size: var(--size-lg);
		}

		& p {
			width: min(80vw, 50ch);
			color: var(--acm-darker);
			font-size: var(--size-xs);
			font-weight: 600;
			text-align: center;
		}

		& .buttons {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	.capy-emote {
		position: absolute;
		width: 2rem;
		height: 2rem;
		background-color: rgba(var(--acm-general-rgb), 0.25);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		& img {
			width: 75%;
		}
	}

	.capy-emote-0 {
		top: 2rem;
		left: 5rem;
		transform: rotate(-30deg);
	}

	.capy-emote-1 {
		top: 1.5rem;
		right: 5rem;
		transform: rotate(30deg);
	}

	.capy-emote-2 {
		bottom: 2rem;
		left: 3rem;
		transform: rotate(0deg);
	}

	.capy-emote-3 {
		bottom: 1.5rem;
		right: 3.5rem;
		transform: rotate(-30deg);
	}
	@media screen and (min-width: 400px) {
		section {
			& .buttons {
				flex-direction: row;
			}
		}
	}

	@media screen and (min-width: 768px) {
		section {
			padding: 3rem;

			& h1 {
				font-size: var(--size-xl);
			}

			& p {
				font-size: var(--size-sm);
			}

			& .buttons {
				flex-direction: row;
				gap: 1.5rem;
			}
		}
	}
</style>
