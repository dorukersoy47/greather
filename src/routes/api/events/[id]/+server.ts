import { PrismaClient } from "@prisma/client";

import type { RequestHandler } from "@sveltejs/kit";
import eventDummy from "../../../../lib/dummy/eventDummy";

export const GET: RequestHandler = async ({ params }) => {
	const _id: number = Number(params.id) ?? 0;
	try {
		const prisma = new PrismaClient();

		const e = await prisma.event.findUnique({
			where: {
				id: _id,
			},
		});

		const sponsor = await prisma.user.findUnique({
			where: {
				id: e?.sponsorId,
			},
		});

		const result = {
			event: e,
			sponsor: sponsor,
		};

		return new Response(JSON.stringify(result), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify(eventDummy[_id - 1]), {
			status: 200,
		});
	}
};
