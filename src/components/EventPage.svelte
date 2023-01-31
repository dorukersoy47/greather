<script lang="ts">
	import ProgressBar from "../components/EventPage/ProgressBar.svelte";
	import Card from "../components/global/Card.svelte";
	import type IEvent from "../lib/interfaces/IEvent";
	import Description from "./EventPage/Description.svelte";
	import EventCard from "./global/EventCard.svelte";

	export let event: IEvent;
</script>

<div class="w-screen m-auto p-10 mb-12" style="max-width: 1200px">
	<div class="flex gap-10 w-full justify-center flex-col">
		<div class="flex flex-row gap-10 w-full justify-center items-stretch">
			<EventCard {event} />
			<Card noPadding className="self-stretch p-0">
				<img
					alt="Event"
					src={event.event.eventPhoto}
					class="object-cover rounded-3xl h-full w-full" />
				<div class="h-0">
					<div
						class="h-36 w-36 relative bg-neutral-300 rounded-full bottom-48 -right-[67%] big-sponsor-icon">
						<img class="rounded-full" src={event.sponsor.photo} alt="Sponsor Profile" />
					</div>
				</div>
			</Card>
		</div>
		<ProgressBar {event} />
		<Description {event} />
	</div>
</div>

<style scoped>
	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.big-sponsor-icon {
		animation: rotating 30s linear infinite;
	}
</style>
