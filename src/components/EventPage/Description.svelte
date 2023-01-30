<script lang="ts">
	import type IEvent from "../../lib/interfaces/IEvent";
	import Card from "../global/Card.svelte";

	export let event: IEvent;
</script>

<Card>
	<div class="flex gap-12 py-6">
		<div class="flex-1">
			<div class="font-bold text-2xl pb-3 text-neutral-800">
				Description
			</div>
			{event.event.description}
		</div>
		<div class="flex-1 flex flex-col">
			<div class="font-bold text-2xl pb-3 text-neutral-800">
				Requirements
			</div>
			{#each event.event.requirements as r}
				<div>• {r}</div>
			{/each}
		</div>
	</div>
</Card>
