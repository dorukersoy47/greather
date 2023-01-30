import { PrismaClient } from "@prisma/client";

import type IEvent from "$lib/interfaces/IEvent";

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
	const _id: number = Number(params.id) ?? 0;

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

	console.log(result);

	return new Response(JSON.stringify(result), {
		status: 200,
	});
};
