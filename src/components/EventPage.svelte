<script lang="ts">
	import ProgressBar from "../components/EventPage/ProgressBar.svelte";
	import Card from "../components/global/Card.svelte";
	import type IEvent from "../lib/interfaces/IEvent";
	import Description from "./EventPage/Description.svelte";
	import EventCard from "./EventPage/EventCard.svelte";

	export let event: IEvent;
</script>

<div class="w-screen m-auto p-10 mb-12" style="max-width: 1200px">
	<div class="flex gap-10 w-full justify-center flex-col">
		<div class="flex flex-row gap-10 w-full justify-center items-stretch">
			<EventCard {event} />
			<Card noPadding className="self-stretch p-0">
				<img
					alt="Event"
					src={event.eventPhoto}
					class="object-cover rounded-3xl h-full w-full" />
				<div class="h-0">
					<div
						class="h-36 w-36 relative bg-red-300 rounded-full bottom-48 -right-[67%] big-sponsor-icon">
						<img src={event.sponsor.photo} alt="Sponsor Profile" />
					</div>
				</div>
			</Card>
		</div>
		<ProgressBar {event} />
		<Description {event} />
	</div>

	<!-- <div class="flex gap-6 h-full w-full bg-red-400 overflow-y-scroll justify-center flex-col">
        <div class="flex gap-6 w-full justify-center">
            <div class="h-20 w-20 bg-black">
                <LeftImage src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
            </div>
            <div class="h-20 w-10 bg-black"></div>
        </div>
        <div class="w-full h-20 bg-black"></div>
    </div> -->
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
		animation: rotating 20s linear infinite;
	}
</style>
