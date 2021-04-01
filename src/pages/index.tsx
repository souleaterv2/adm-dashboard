import Head from "next/head";
import { Flex, Stack, Button } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SigIn() {
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
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="Senha" />
            <Button type="submit" size="lg" colorScheme="pink" mt="6">
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
