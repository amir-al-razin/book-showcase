import {  Box, Flex } from "@chakra-ui/layout";
import React from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";

export default function Header() {
  return (
    <Box backgroundColor="gray.800" px="3" py="4" borderBottom="1px" borderBottomColor="gray.700">
    <Flex direction="row" align="center" justifyContent="space-between" >
      <LeftHeader />
      <MiddleHeader />
      <RightHeader/>
    </Flex>
    </Box>
  );
}
