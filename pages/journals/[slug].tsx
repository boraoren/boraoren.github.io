import React, {FC} from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllJournal, getSingleJournal, getStaticPathsForJournal} from "../../utils/mdx";
import {Frontmatter} from "../../interfaces/JournalModel";
import LayoutJournal from "../../components/LayoutJournal";
import * as Components from "../../components";

interface JournalProps {
    code: any;
    frontmatter: Frontmatter;
}

const Journal: FC<JournalProps> = ({code, frontmatter}) => {
    
    const Component = React.useMemo(() => getMDXComponent(code), [code]);

    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component components={{
        // @ts-ignore
        Components
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
    const paths = getStaticPathsForJournal();
    return {
        paths,
        fallback: false,
    };
};

export default Journal;
