<script lang="ts">
	export let content: string;
</script>

<button>{content}</button>

<style lang="scss">
	button {
		outline: none;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in;
		padding: 0.5rem 0.75rem;
		border-radius: 1rem;
		font-size: var(--size-xs);
		background-color: var(--acm-darker);
		color: var(--acm-light);

		&:hover {
			opacity: 0.7;
		}
	}

	@media screen and (min-width: 768px) {
		button {
			font-size: var(--size-sm);
		}
	}
</style>
