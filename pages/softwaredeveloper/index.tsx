import React, {createElement, Fragment, useEffect, useState} from "react";
import Layout from "../../components/Layout";
import "tailwindcss/tailwind.css";
import {GetStaticProps} from "next";
import {homePageData} from "../../data/pages/home";
import packageJson from "../../package.json";
import HomePageData from "../../interfaces/HomePageData";
import JournalModel from "../../interfaces/JournalModel";

import {Box, createIcon, Flex, Icon, Image, Link, Text, useColorMode,} from "@chakra-ui/react";
import JournalSummary from "../../components/molecules/journal/summary";
import {getAllJournal} from "../../utils/mdx";

import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import {dateToDay} from "../../utils/dateUtil";


const IndexPage: React.FC<{
    homePageData: HomePageData;
    journals: JournalModel[];
}> = ({homePageData, journals}) => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Layout title={homePageData.pageTitle["en-US"]}>

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
            <Box bg="primary.900" m={1}  rounded={"xl"}>
                <Flex align={"center"}>
                    <Flex direction={"column"} alignItems={"center"} flex={1}>
                        <Text
                            fontSize={["xl", "3xl", "5xl", "7xl"]}
                            color="primary.50"
                            fontFamily={"primary"}
                            fontWeight={900}
                        >
                            {homePageData.hi["en-US"]} {homePageData.Im["en-US"]}{" "}
                            {homePageData.name["en-US"]}
                        </Text>
                        <Text
                            fontSize={["md", "xl", "3xl", "5xl"]}
                            color="secondary.400"
                            fontFamily={"secondary"}
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
            {journals.map((journal, index) => {
                return <JournalSummary key={index} day={dateToDay(journal.frontmatter.date)}>
                    <>
                        <span dangerouslySetInnerHTML={{__html: journal.frontmatter.summary}} />
                        &nbsp;<Link href={`journals/${journal.slug}`} style={{fontWeight: "bold"}}>{journal.frontmatter.readMore}</Link>
                    </>
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
