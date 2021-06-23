import { Box } from "@chakra-ui/layout";
import React, { FC, ReactNode } from "react";
import Header from "../header/Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Box >
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
