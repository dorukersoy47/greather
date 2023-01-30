<script>
	import EventList from "../components/EventList.svelte";
	import { dummyData } from "../dummyData";
	let events = [dummyData, dummyData, dummyData, dummyData, dummyData];
	// @freeturk burda events e tüm existing eventleri pulla
</script>

<EventList {events} />
