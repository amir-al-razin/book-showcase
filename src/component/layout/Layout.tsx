import { Box } from "@chakra-ui/layout";
import React, { FC, ReactNode } from "react";
import Header from "../header/Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Box backgroundColor="gray.800" color="gray.300">
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
