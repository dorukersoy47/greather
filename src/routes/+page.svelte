<script lang="ts">
	import { onMount } from "svelte";
	import EventList from "../components/EventList.svelte";

	$: events = [];

	onMount(async () => {
		fetch("/api/allevents")
			.then((res) => res.json())
			.then((data) => {
				events = data;
			})
			.catch((err) => {
				console.log(err);
				return [];
			});
	});
</script>

<EventList {events} />
