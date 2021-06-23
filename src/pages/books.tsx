import React from "react";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { Skeleton } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import Book from "../components/book/Book";
import Layout from "../components/layout/Layout";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import _ from "lodash";

interface DataTypes {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

interface BooksProps {
  data: Array<DataTypes>;
}
const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  900: 3,
  700: 2,
  500: 1,
};
const Books: NextPage<BooksProps> = () => {
  const { data, error } = useSWR("/api/book", fetcher);

  // Convert array to JSX items

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!data
        ? _.range(1, 5).map((n) => (
            <Skeleton>
              <div>{n}</div>
              <div>won't be visible</div>
            </Skeleton>
          ))
        : data.map(({ img_link, name, author, id }) => (
            <Book
              id={id}
              key={id}
              img_link={img_link}
              name={name}
              author={author}
            />
          ))}
    </Masonry>
  );
};

export default Books;
