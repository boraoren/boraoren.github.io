import React, {FC} from "react";
import {getMDXComponent} from "mdx-bundler/client";
import {getAllPortfolio, getSinglePortfolio} from "../../utils/mdx";
import {Frontmatter} from "../../interfaces/PortfolioModel";
import * as Components from "../../components";
import LayoutPortfolio from "../../components/LayoutPortfolio";


interface PortfolioProps {
    code: any;
    frontmatter: Frontmatter;
}

const Portfolio: FC<PortfolioProps> = ({code, frontmatter}) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);

    const MDXWrapper = (props) => <div className='mdx-prose' {...props} ><Component components={{
        // @ts-ignore
        Components
    }}/></div>

    return (
        <LayoutPortfolio title={frontmatter.title}>
            <MDXWrapper/>
        </LayoutPortfolio>
    );
};

export const getStaticProps = async ({params}) => {
    const post = await getSinglePortfolio(params.slug);
    return {
        props: {...post},
    };
};

export const getStaticPaths = async () => {
    const paths = getAllPortfolio().map(({slug}) => ({params: {slug}}));
    return {
        paths,
        fallback: false,
    };
};

export default Portfolio;
