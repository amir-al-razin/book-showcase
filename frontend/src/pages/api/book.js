import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const createdBook = await prisma.allbooks.create({
    data,
  });

  console.log(createdBook);

  res.json(createdBook);
};
