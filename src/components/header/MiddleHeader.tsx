import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { color } from "@chakra-ui/styled-system";
import React from "react";

const MiddleHeader: React.FC = () => {
  return (
    <InputGroup maxW="3xl">
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="" />}
      />
      <Input
        type="text"
        placeholder="Search Books "
        fontWeight="semibold"
        variant="filled"
      />
    </InputGroup>
  );
};

export default MiddleHeader;
