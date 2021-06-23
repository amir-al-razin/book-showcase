import { PrismaClient } from ".prisma/client";
import { GetServerSideProps } from "next";
import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import deletebook from "../../pages/api/deletebook";
import EditBook from "../editBook/EditBook";

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

  const deleteBook = async () => {
    const response = await fetch("/api/deletebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return response;
  };

  return (
    <>
      <Box
        cursor="pointer"
        key={id}
        boxShadow="2xl"
        borderRadius="xl"
        p="3"
        className="flex flex-col m-2 flex-nowrap"
        position="relative"
      >
        <Image src={img_link} alt={name} />
        <Flex align="center" justify="space-between">
          <Box mt="1">
            <Text fontWeight="bold" fontSize="xl">
              {name}
            </Text>
            <Text className="font-semibold">{author}</Text>
          </Box>
          {/* delete icon */}
          <IconButton
            variant="solid"
            aria-label="Send email"
            _focus={{ outline: "none" }}
            icon={<DeleteIcon />}
            onClick={deleteBook}
          />
        </Flex>
        <EditBook />
      </Box>
    </>
  );
};

export default Book;
