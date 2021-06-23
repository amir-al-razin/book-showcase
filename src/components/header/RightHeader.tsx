import { IconButton } from "@chakra-ui/button";
import { ArrowForwardIcon, EmailIcon, MoonIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import PopoverForm from "../addBook/AddBook";
import ThemeToggle from "../layout/ThemeToggle";

const RightHeader: React.FC = () => {
  return (
    <Stack direction="row" spacing={4} mx="4">
      <PopoverForm />
      <ThemeToggle />
    </Stack>
  );
};

export default RightHeader;
