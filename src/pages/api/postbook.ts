import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name,author,img_link,language,is_available,is_translated} = req.body;
  const prisma = new PrismaClient();
  const books = await prisma.allbooks.create({
    data: {
      author,
      name,
      is_translated,
      is_available,
      language,
      img_link,
    },
  });

  res.json(books);
};
