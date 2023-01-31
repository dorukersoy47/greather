import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`/api/events/${params.id}`);
	const event = await res.json();
	return { event };
}) satisfies PageLoad;
