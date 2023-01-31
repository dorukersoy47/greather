/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";
import defaultProfilePicture from "../../../lib/defaultProfilePicture";

export const POST = async (req: Request, res: Response) => {
	const prisma = new PrismaClient();

	const name: string = (req.url as any).searchParams.get("name");
	const email: string = (req.url as any).searchParams.get("email");
	const password: string = (req.url as any).searchParams.get("password");

	prisma.user.create({
		data: {
			name: name,
			email: email,
			password: password,
			photo: defaultProfilePicture,
		},
	});

	return new Response(
		JSON.stringify({ name: name, email: email, password: password }),
		{ status: 200 },
	);
};
