import React from "react";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Masonry from "react-masonry-css";

interface DataTypes {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

interface BooksProps {
  data: Array<DataTypes>;
}

export const Books: React.FC<BooksProps> = ({ data }) => {
  console.log;

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };

  // Convert array to JSX items
  const allBooks = data.map(({ img_link, name, author, id }) => (
    <div
      key={id}
      className="bg-gray-700 py-1 px-2 flex flex-col flex-nowrap rounded m-2"
    >
      <img src={img_link} className="  block rounded" alt={name} />
      <div className="mt-2">
        <h2 className="text-gray-200  text-lg font-bold">{name}</h2>
        <h3 className="font-semibold text-gray-400">{author}</h3>
      </div>
    </div>
  ));

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {allBooks}
    </Masonry>
  );
};

export default Books;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient();
  const books = await prisma.allbooks.findMany();

  return {
    props: {
      data: books,
    },
  };
};
