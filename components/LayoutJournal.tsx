import React, {ReactNode} from 'react'
import Head from 'next/head'
import {Container, Flex, SimpleGrid} from '@chakra-ui/react'
import JournalTitle from "./atoms/journal/title";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {useRouter} from 'next/router'

type Props = {
    children?: ReactNode
    title?: string
}

const LayoutJournal = ({children, title = 'This is the default title'}: Props) => {
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
            <Flex color='white' direction="row">
                <>
                    <ArrowBackIcon boxSize={['5', '10', '20']}
                                   color="secondary.400"
                                   alignSelf="center"
                                   onClick={()=> router.back()}
                    />
                    <JournalTitle>
                        {title}
                    </JournalTitle>
                </>
            </Flex>
            {children}
            <br/>
            <footer>
                <hr/>
                <span/>
                <br/>
                FOOTER TODO
            </footer>
        </Container>
    )
};

export default LayoutJournal;
