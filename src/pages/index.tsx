import Head from "next/head";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | dashGO</title>
      </Head>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          backgroundColor="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: "gray.900" }}
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha:</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: "gray.900" }}
                size="lg"
              />
            </FormControl>
            <Button type="submit" size="lg" colorScheme="pink" mt="6">
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
