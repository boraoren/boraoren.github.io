import React from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllJournal, getSingleJournal} from "../../utils/mdx";

const Journal = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component/></div>

    return (
        <div>
            <MDXWrapper/>
        </div>
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
