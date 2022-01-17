import React from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllJournal, getSingleJournal} from "../../utils/mdx";
import Layout from "../../components/Layout";
import {Frontmatter} from "../../interfaces/JournalModel";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import {getMDXExport} from 'mdx-bundler/client'

interface JournalProps {
    code: any;
    frontmatter: Frontmatter;
}

/*const Paragraph: React.FC = props => {
    console.log("CHILDREN", props);
    if (typeof props.children !== 'string' && props.children.type === 'img') {
        return <>{props.children}</>
    }

    return <p {...props} />
}*/

const Journal: React.FC<JournalProps> = ({code, frontmatter}) => {
    //const mdxExport = getMDXExport(code);
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    //const Component = React.useMemo(() => mdxExport.default, [code]);
    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component /></div>

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
