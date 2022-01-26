import React, {FC, ReactNode} from 'react'
import Head from 'next/head'
import {Center, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import JournalTitle from "./atoms/journal/title";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {useRouter} from 'next/router'
import Footer from "./pages/footer";

interface LayoutJournalProps {
    children?: ReactNode;
    title?: string;
}

const LayoutPortfolio: FC<LayoutJournalProps> = ({children, title}) => {
    const router = useRouter();

    return (
        <Container maxWidth={1000} height={"100vh"}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <nav>
                </nav>
            </header>
            <Flex direction="row">
                <ArrowBackIcon boxSize={['5', '10', '20']}
                               color="#5DB075"
                               alignSelf="center"
                               _hover={{
                                   cursor: "pointer",
                                   color: "black"
                               }}

                               onClick={() => router.back()}/>

                <Text textStyle="h1" textTransform="uppercase">{title}</Text>

            </Flex>
            <Center mt={50}>
                {children}
            </Center>
            <br/>
            <Footer/>
        </Container>
    )
};

export default LayoutPortfolio;
