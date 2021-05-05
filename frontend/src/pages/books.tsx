import React from "react";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";

import Masonry from "react-masonry-css";
import Book from "../component/book/Book";

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
    <Book id={id} img_link={img_link} name={name} author={author} />
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
