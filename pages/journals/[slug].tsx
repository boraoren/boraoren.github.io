import React, {FC} from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllJournal, getSingleJournal} from "../../utils/mdx";
import {Frontmatter} from "../../interfaces/JournalModel";
import LayoutJournal from "../../components/LayoutJournal";
import CartoonTemplate from "../../components/templates/cartoon";

interface JournalProps {
    code: any;
    frontmatter: Frontmatter;
}

const Journal: FC<JournalProps> = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component components={{
        CartoonTemplate,
    }}/></div>

    return (
        <LayoutJournal title={frontmatter.title}>
            <MDXWrapper/>
        </LayoutJournal>
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
