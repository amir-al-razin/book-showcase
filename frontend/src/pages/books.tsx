import React from "react";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";

import Masonry from "react-masonry-css";
import Book from "../component/book/Book";
import Layout from "../component/layout/Layout";

interface DataTypes {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

interface BooksProps {
  data: Array<DataTypes>;
}

const Books: NextPage<BooksProps> = ({ data }) => {
  

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    900:3,
    700: 2,
    500: 1,
  };

  // Convert array to JSX items
  const allBooks = data.map(({ img_link, name, author, id }) => (
    <Book id={id} key={id} img_link={img_link} name={name} author={author} />
  ));

  return (
    <Layout >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allBooks}
      </Masonry>
    </Layout>
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
