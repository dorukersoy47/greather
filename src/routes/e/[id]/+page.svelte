<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import EventPage from "../../../components/EventPage.svelte";

	$: e = {};

	onMount(async () => {
		const _id = await $page.params.id;
		await fetch(`/api/events/1`)
			.then((res) => res.json())
			.then((event) => {
				e = event;
				console.log(event);
			})
			.catch((err) => {
				console.log(err);
				return { err: "err" };
			});
	});
</script>

<EventPage event={e} />
