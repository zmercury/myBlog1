import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import Container from '@/components/Container'

export default function Blog({ posts }) {
    return (
        <>
            <Head>
                <title>Blog - Nikhil Bastola</title>
            </Head>
            <Container>
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
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Blog
                        </Heading>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

// export async function getStaticProps() {
//     TODO fetch blog post

//     return { props : { post } }
// }