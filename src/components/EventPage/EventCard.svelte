<script lang="ts">
	import moment from "moment";
	import type IEvent from "../../lib/interfaces/IEvent";
	import Button from "../global/Button.svelte";
	import Card from "../global/Card.svelte";
	import EventPoint from "./EventCard/EventPoint.svelte";

	export let event: IEvent;
</script>

<Card noPadding className="w-[720px]">
	<div class="bg-neutral-800 rounded-t-3xl px-8 py-14">
		<div class="font-medium text-white text-4xl">
			<div class="pb-6 pt-5">
				<div>We are</div>
				<div class="text-lime-400">{event.title}.</div>
			</div>
			<div class="flex text-sm gap-3 items-center">
				<img
					class="h-10 w-10"
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
			<EventPoint key="Where?" value={event.where} />
			<EventPoint
				key="When?"
				value={moment(event.dates.goal).format("LL")} />
			<EventPoint key="Reward" value={"$" + event.reward} />
		</div>
		<div class="flex gap-3 items-center">
			<Button className="hover:scale-110 hover:-rotate-3 transition-all duration-200">I'll be there</Button>
			<div class="text-neutral-500 text-sm leading-tight">
				{event.people.joined} people<br />already registered
			</div>
		</div>
	</div>
</Card>
