import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
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
  const errorToast = () => {
    toast.error("This feature is not supported now", {
      style: {
        border: "1px solid #48bb78",
        padding: "16px",
        color: "#307c50",
      },
      iconTheme: {
        primary: "#48BB78",
        secondary: "#FFFAEE",
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
