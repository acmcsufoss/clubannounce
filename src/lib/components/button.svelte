<script lang="ts">
	export let content: string;
</script>

<button>{content}</button>

<style>
	button {
		outline: none;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in;
		padding: 0.5rem 1rem;
		border-radius: 1.25rem;
		font-size: var(--size-xs);
		background-color: var(--acm-darker);
		color: var(--acm-light);
	}

	button:hover {
		opacity: 0.7;
	}

	@media screen and (min-width: 768px) {
		button {
			font-size: var(--size-sm);
		}
	}
</style>
