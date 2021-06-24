import React from "react";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import Book from "../components/book/Book";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import _ from "lodash";
import { NextPage } from "next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface DataTypes {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

interface BooksProps {
  data: Array<DataTypes>;
}
const Books: NextPage<BooksProps> = () => {
  const { data, error } = useSWR("/api/book", fetcher);

  // Convert array to JSX items

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 250:1,350: 1, 750: 3, 900: 5 }}>
      <Masonry gutter="10px">
        {!data
          ? _.range(1, 6).map((n) => (
              <Skeleton borderRadius="xl">
                <SkeletonText mt="4" noOfLines={4+n} spacing="4" />
                <SkeletonText mt="4" noOfLines={4+n} spacing="4" />
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
    </ResponsiveMasonry>
  );
};

export default Books;
