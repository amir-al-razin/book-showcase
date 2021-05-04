import React from "react";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Masonry from "react-masonry-css";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Book from "../component/book/Book";

interface BookTypes {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

interface BooksProps {
  data: Array<BookTypes>;
}

const Books: React.FC<BooksProps> = ({ data }) => {
  console.log;

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };

  // Convert array to JSX items
  const AllBooks = data.map(({ img_link, name, author, id }) => (
    <Book img_link={img_link} name={name} author={author} id={id} />
  ));

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {AllBooks}
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
