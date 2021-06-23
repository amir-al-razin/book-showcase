import React from "react";
import Link from 'next/link'
import {Heading} from '@chakra-ui/layout'

const LeftHeader: React.FC = () => {
  return (
    <Link href="/">
      <Heading cursor="pointer">BookHouse</Heading>
    </Link>
  );
};

export default LeftHeader;
