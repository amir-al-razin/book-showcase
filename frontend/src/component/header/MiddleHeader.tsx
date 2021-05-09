import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { color } from "@chakra-ui/styled-system";
import React from "react";

const MiddleHeader: React.FC = () => {
  return (
    <InputGroup maxW="3xl">
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search Books "
        backgroundColor="gray.600"
        fontWeight="semibold"
        variant="filled"
        _hover={{backgroundColor:'transparent'}}
      />
    </InputGroup>
  );
};

export default MiddleHeader;
