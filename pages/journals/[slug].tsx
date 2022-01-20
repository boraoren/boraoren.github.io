import React, {FC} from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllJournal, getSingleJournal} from "../../utils/mdx";
import Layout from "../../components/Layout";
import {Frontmatter} from "../../interfaces/JournalModel";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../../utils/theme";
import {getMDXExport} from 'mdx-bundler/client'

interface JournalProps {
    code: any;
    frontmatter: Frontmatter;
}

const Journal: FC<JournalProps> = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component/></div>

    return (
        <Layout title={frontmatter.title}>
            <MDXWrapper/>
        </Layout>
    );
};

export const getStaticProps = async ({params}) => {
    const post = await getSingleJournal(params.slug);
    return {
        props: {...post},
    };
};

export const getStaticPaths = async () => {
    const paths = getAllJournal().map(({slug}) => ({params: {slug}}));
    return {
        paths,
        fallback: false,
    };
};

export default Journal;
