<script lang="ts">
	import { page } from "$app/stores";
	import EventPage from "../../../components/EventPage.svelte";
	import { dummyData } from "../../../dummyData";

	const _id = $page.params.id;
	// @freeturk fetch from api route `/api/events/${_id}`
</script>

<EventPage event={dummyData} />
