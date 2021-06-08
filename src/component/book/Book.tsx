import { PrismaClient } from ".prisma/client";
import { GetServerSideProps } from "next";
import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

interface BookProps {
  img_link: string;
  name: string;
  author: string;
  id: number;
}

export const Book: React.FC<BookProps> = ({
  id,
  img_link,
  name,
  author,
}: BookProps) => {
  // Convert array to JSX items

  return (
    <>
      <Box
        key={id}
        boxShadow="2xl"
        borderRadius="xl"
        backgroundColor="gray.800"
        p="3"
        className=" flex flex-col flex-nowrap  m-2"
      >
        <Image src={img_link} alt={name} />
        <Box mt="1">
          <Text fontWeight="bold" color="gray.200" fontSize="xl">
            {name}
          </Text>
          <Text className="font-semibold text-gray-400">{author}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Book;
