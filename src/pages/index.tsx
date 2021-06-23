import { Box, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/books">
          <Heading fontSize="6xl" textAlign="center">
            All Books
          </Heading>
        </Link>
        <div></div>
      </main>
    </div>
  );
}
