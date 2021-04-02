import Head from "next/head";

import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexChar } from "../components/chat";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title> Dashboard | dashgo </title>
      </Head>
      <Flex direction="column">
        <Header />
        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
          <Sidebar />
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <ApexChar />
            </Box>
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <ApexChar />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
