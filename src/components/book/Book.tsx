import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import EditBook from "../editBook/EditBook";
import toast, { Toaster } from "react-hot-toast";

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
  const { colorMode } = useColorMode();
  const errorToast = () => {
    toast.error("This feature is currently unavailable", {
      style: {
        border: "3px solid #f03a17",
        borderRadius: 5,
        color: colorMode === "light" ? "#f03a17" : "#fff",
        backgroundColor: colorMode === "light" ? "#fff" : "#353535",
        boxShadow: "none",
        fontWeight: 600,
      },
    });
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
            onClick={errorToast}
          />
          <Toaster />
        </Flex>
        <EditBook />
      </Box>
    </>
  );
};

export default Book;
