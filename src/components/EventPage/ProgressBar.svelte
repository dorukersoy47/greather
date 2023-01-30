<script lang="ts">
	import type IEvent from "../../lib/interfaces/IEvent";
	import Card from "../global/Card.svelte";
	import moment from "moment";

	export let event: IEvent;
</script>

<Card>
	<div
		class="h-10 w-full border-2 border-neutral-500 rounded-3xl bg-neutral-100">
		<div
			class="transition-all duration-300 h-full bg-lime-400 rounded-3xl"
			style={`width: ${
				(event.event.peopleJoined / event.event.peopleTarget) * 100
			}%;`} />
	</div>
	<div class="pt-8 pb-2 px-2 flex justify-between">
		<div>
			{event.event.peopleJoined} people are going • Started {moment(
				event.event.datesStart,
			).format("LL")}
		</div>
		<div>
			<span class="font-semibold"> Goal: </span>
			{event.event.peopleTarget} people
		</div>
	</div>
</Card>
