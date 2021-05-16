import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  
 
 

  res.status(200).json({error:'error occured'});
};
