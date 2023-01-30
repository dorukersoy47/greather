import { PrismaClient } from "@prisma/client";

import type { RequestHandler } from "@sveltejs/kit";
import type IEvent from "$lib/interfaces/IEvent";

export const GET: RequestHandler = async () => {
	const prisma = new PrismaClient();

	const e = await prisma.event.findMany();

	const sponsors = await prisma.user.findMany();

	const eventout: Array<any> = [];

	e.forEach((element) => {
		eventout.push({
			event: element,
			sponsor: sponsors.find(
				(sponsor) => sponsor.id === element.sponsorId,
			),
		});
	});

	console.log(eventout);

	return new Response(JSON.stringify(eventout), {
		status: 200,
	});
};
