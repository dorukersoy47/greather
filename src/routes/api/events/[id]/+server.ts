import { PrismaClient } from "@prisma/client";

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
	const _id: number = Number(params.id) ?? 0;

	const prisma = new PrismaClient();

	const e = await prisma.event.findUnique({
		where: {
			id: _id,
		},
	});

	return new Response(JSON.stringify(e), {
		status: 200,
	});
};
