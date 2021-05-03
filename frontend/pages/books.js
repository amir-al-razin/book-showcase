import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Books({ data }) {
  console.log(data);

  return (
    <>
      <div className=" grid books grid-cols-1   sm:grid-cols-6 gap-4">
        {data.map(({ img_link, name, author }) => (
          <div className="bg-gray-700 py-1 px-2 flex flex-col flex-nowrap rounded m-2">
            <img
              src={img_link}
              className=" w-full md:w-72 block rounded"
              alt={name}
            />
            <div className="mt-2">
              <h2 className="text-gray-200  text-xl font-bold">{name}</h2>
              <h3 className="font-semibold text-gray-400">{author}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const books = await prisma.allbooks.findMany();

  return {
    props: {
      data: books,
    },
  };
}
