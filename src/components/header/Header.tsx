import {  Box, Flex } from "@chakra-ui/layout";
import React from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";

export default function Header() {
  return (
    <Box  px="3" py="4" borderBottom="1px" >
    <Flex direction="row" align="center" justifyContent="space-between" >
      <LeftHeader />
      <MiddleHeader />
      <RightHeader/>
    </Flex>
    </Box>
  );
}
