import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  const prisma = new PrismaClient();
  const books = await prisma.allbooks.delete({
    where: {
      id: 2,
    },
  });

  res.json(books);
};
