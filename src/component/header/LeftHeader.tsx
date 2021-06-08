import React from "react";
import Link from 'next/link'
import { Image } from "@chakra-ui/react";

const LeftHeader: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width="56" />
    </Link>
  );
};

export default LeftHeader;
