<script lang="ts">
	import type IEvent from "../lib/interfaces/IEvent";
	import EventCard from "./EventPage/EventCard.svelte";

	export let events: Array<IEvent>;
</script>

<div class="w-screen m-auto p-10 mb-12" style="max-width: 1200px">
	<div class="grid gap-6 grid-cols-2">
		{#each events as event}
			<EventCard forEventList fullWidth {event} />
		{/each}
	</div>
</div>
