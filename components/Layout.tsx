import React, {ReactNode} from 'react'
import Head from 'next/head'
import {ChakraProvider, Container} from '@chakra-ui/react'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
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

export default Layout
