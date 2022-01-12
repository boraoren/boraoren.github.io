import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import {GetStaticProps} from "next";
import {homePageData} from "../data/pages/home";
import packageJson from "../package.json";
import HomePageData from "../interfaces/HomePageData";
import JournalModel from "../interfaces/JournalModel";

import {Box, createIcon, Flex, Icon, Image, Text, useColorMode,} from "@chakra-ui/react";
import JournalSummary from "../components/molecules/journal/summary";
import {getAllJournal} from "../utils/mdx";

import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import {createElement, Fragment, useEffect, useState} from "react";

const Arrow = createIcon({
    displayName: "Arrow",
    viewBox: "0 0 72 24",
    path: (
        <div>
            <path
                d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                fill="#0acf83"
            />
            <path
                d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                fill="#a259ff"
            />
            <path
                d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                fill="#f24e1e"
            />
            <path
                d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
                fill="#ff7262"
            />
            <path
                d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                fill="#1abcfe"
            />
        </div>
    ),
});

const IndexPage: React.FC<{
    homePageData: HomePageData;
    journals: JournalModel[];
}> = ({homePageData, journals}) => {
    const {colorMode, toggleColorMode} = useColorMode();

    function useProcessor(text) {
        // @ts-ignore
        const [Content, setContent] = useState(Fragment)

        useEffect(() => {
            unified()
                .use(rehypeParse, {fragment: true})
                .use(rehypeReact, {createElement, Fragment})
                .process(text)
                .then((file) => {
                    setContent(file.result)
                })
        }, [text])

        return Content
    }



    return (
        <Layout title={homePageData.pageTitle["en-US"]}>
            {JSON.stringify(journals)}

            <Flex m={2} justifyContent={"space-between"}>
                <Box>
                    <Text
                        fontSize={["md", "lg", "xl", "2xl"]}
                        fontFamily={"caveat"}
                        right={"0px"}
                        top={"-10px"}
                        transform={"rotate(-10deg)"}
                    >
                        V{packageJson.version}
                    </Text>
                </Box>
            </Flex>
            <Box bg="primary.900" m={1}>
                <Flex align={"center"}>
                    <Flex direction={"column"} alignItems={"center"} flex={1}>
                        <Text
                            fontSize={["xl", "3xl", "5xl", "7xl"]}
                            color="primary.50"
                            fontFamily={"title"}
                            fontWeight={900}
                        >
                            {homePageData.hi["en-US"]} {homePageData.Im["en-US"]}{" "}
                            {homePageData.name["en-US"]}
                        </Text>
                        <Text
                            fontSize={["md", "xl", "3xl", "5xl"]}
                            color="secondary.400"
                            fontFamily={"subtitle"}
                            fontWeight={900}
                        >
                            {homePageData.title["en-US"]}
                        </Text>
                    </Flex>
                    <Image
                        src={`./images/${homePageData.image}`}
                        alt="Bora Oren"
                        boxSize={"50%"}
                        mt={-50}
                    />
                </Flex>
                {/** <Button onClick={toggleColorMode}>
                 Toggle {colorMode === "light" ? "Dark" : "Light"}
                 </Button> **/}
            </Box>
            <Text
                mt={9}
                mb={9}
                fontWeight={"bold"}
                fontSize={["md", "lg", "xl", "2xl"]}
            >
                JANUARY 2022
            </Text>
            {journals.map((journal) => {
                return <JournalSummary date={journal.frontmatter.day}>
                    {useProcessor(journal.frontmatter.summary)}
                </JournalSummary>
            })}
        </Layout>
    );
};

/*
<div className="relative h-screen bg-black bg-opacity-75 w-1/2" />
*/

export const getStaticProps: GetStaticProps = async () => {
    try {
        const journals = getAllJournal();
        return {props: {homePageData: homePageData, journals}};
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export default IndexPage;
