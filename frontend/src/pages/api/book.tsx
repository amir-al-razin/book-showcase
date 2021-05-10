import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = req.body;

  

  res.status(200).json(data || {"name":"Razin"});
};
