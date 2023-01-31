<script lang="ts">
	import EventCard from "./global/EventCard.svelte";

	export let events: Array<any>;
</script>

<div class="w-screen m-auto p-10 mb-12" style="max-width: 1000px">
	<div class="grid gap-6 grid-cols-2">
		{#each events as event}
			<EventCard forEventList fullWidth {event} />
		{/each}
	</div>
</div>
