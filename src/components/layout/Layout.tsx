import { Box } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Header from "../header/Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.xl" >
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
