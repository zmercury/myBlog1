import Head from 'next/head'
import Container from '@/components/Container'
import { Text, useColorMode, Heading, Flex, Stack } from '@chakra-ui/react'

export default function Index() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "grey.700",
    dark: "grey.400",
  };

  return (
    <Container>
      <Head>
        <title>Home - Nikhil Bastola</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"

        >
          <Heading mb={2}>Hi, I'm Nikhil Bastola</Heading>
          <Text>Nulla do nulla sunt ad. Velit Lorem ad adipisicing nostrud labore est pariatur. Cupidatat mollit incididunt dolore anim do pariatur fugiat elit esse commodo ex irure mollit. Nisi sunt commodo duis adipisicing nostrud ut.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
