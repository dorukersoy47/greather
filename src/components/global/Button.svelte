<script lang="ts">
	export let onClick: () => void = () => {};
	export let className: string = "";
</script>

<button
	class={`rounded-xl py-3 px-7 bg-lime-300 border-neutral-500 border-2 text-neutral-800 font-medium ${className}`}
	on:click={onClick}><slot /></button>
