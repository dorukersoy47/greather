import { PrismaClient } from "@prisma/client";

import type { RequestHandler } from "@sveltejs/kit";
import defaultProfilePicture from "../../../lib/defaultProfilePicture";
import allEventsDummy from "../../../lib/dummy/allEventsDummy";
import type IEvent from "../../../lib/interfaces/IEvent";

export const GET: RequestHandler = async () => {
	try {
		const prisma = new PrismaClient();

		const e = await prisma.event.findMany();

		const sponsors = await prisma.user.findMany();

		const eventout: Array<IEvent> = [];

		e.forEach((element) => {
			eventout.push({
				event: element,
				sponsor: sponsors.find(
					(sponsor) => sponsor.id === element.sponsorId,
				) ?? {
					id: -1,
					photo: defaultProfilePicture,
					name: "Unknown User",
					email: "<unknown>",
					password: "",
				},
			});
		});

		console.log(eventout);

		return new Response(JSON.stringify(eventout), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify(allEventsDummy), { status: 200 });
	}
};
