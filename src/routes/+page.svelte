<script lang="ts">
	import EventList from "../components/EventList.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<EventList events={data.events} />
