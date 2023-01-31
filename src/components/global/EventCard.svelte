<script lang="ts">
	import { goto } from "$app/navigation";
	import moment from "moment";
	import EventPoint from "../EventPage/EventCard/EventPoint.svelte";
	import Button from "./Button.svelte";
	import Card from "./Card.svelte";

	export let event: any;
	export let fullWidth: boolean = false;
	export let forEventList: boolean = false;
</script>

<Card noPadding className={`${fullWidth ? "w-full" : "w-[720px]"}`}>
	<div class="bg-neutral-800 rounded-t-3xl px-8 py-14">
		<div class="font-medium text-white text-4xl">
			<div class="pb-6 pt-5">
				<div>We are</div>
				<div class="text-lime-400">{event.event.title}.</div>
			</div>
			<div class="flex text-sm gap-3 items-center">
				<img
					class="h-10 w-10 rounded-full"
					src={event.sponsor.photo}
					alt={event.sponsor.name} />
				<div>
					<div class="text-xs pb-1">sponsored by</div>
					<div class="">{event.sponsor.name}</div>
				</div>
			</div>
		</div>
	</div>
	<div class="p-6">
		<div class="pb-12 pt-4">
			<EventPoint key="Where?" value={event.event.where} />
			<EventPoint
				key="When?"
				value={moment(event.event.datesGoal).format("LL")} />
			<EventPoint key="Reward" value={"$" + event.event.reward} />
		</div>
		<div class="flex gap-3 items-center">
			<Button
				onClick={() => {
					if (forEventList) {
						goto(`/e/${event.event.id}`);
					}
				}}
				className="hover:scale-110 hover:-rotate-3 transition-all duration-200">
				{#if forEventList}
					Details
				{:else}
					I'll be there
				{/if}
			</Button>
			<div class="text-neutral-500 text-sm leading-tight">
				{event.event.peopleJoined} people<br />already registered
			</div>
		</div>
	</div>
</Card>
