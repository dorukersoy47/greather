<script lang="ts">
	import EventPage from "../../../components/EventPage.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<EventPage event={data.event} />
