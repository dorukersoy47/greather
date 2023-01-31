import type IEvent from "../lib/interfaces/IEvent";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
	const res = await fetch("/api/allevents");
	const events = (await res.json()) as Array<IEvent>;
	return {
		events,
	};
}) satisfies PageLoad;
