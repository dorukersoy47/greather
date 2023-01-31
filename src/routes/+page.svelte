<script lang="ts">
	import type IEvent from "../lib/interfaces/IEvent";

	export const load = async ({ fetch, params }) => {
		const res = await fetch("/api/allevents");
		console.log(await res.json());
		const events = (await res.json()) as Array<IEvent>;
		return {
			events,
		};
	};

	export let events: Array<IEvent>;
</script>

<!--
<EventList {events} />
 -->

{events.toString()}
