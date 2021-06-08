import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  const books = await prisma.allbooks.findMany();

  res.json(books);
};
