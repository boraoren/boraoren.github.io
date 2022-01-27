import React from "react";
import Layout from "../components/Layout";
import {GetStaticProps} from "next";
import {indexPageData} from "../data/indexPageData";
import packageJson from "../package.json";
import IndexPageDataModel from "../interfaces/IndexPageDataModel";
import JournalModel from "../interfaces/JournalModel";

import {Box, Flex, Image, Link, Text, useColorMode,} from "@chakra-ui/react";
import JournalSummary from "../components/molecules/journal/summary";
import {getAllJournal} from "../utils/mdx";
import {dateToDay} from "../utils/dateUtil";


const IndexPage: React.FC<{
    indexPageData: IndexPageDataModel;
    journals: JournalModel[];
}> = ({indexPageData, journals}) => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Layout title={indexPageData.pageTitle["en-US"]}>

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
            <Box bg="primary.900" m={1} rounded={"xl"}>
                <Flex align={"center"}>
                    <Flex direction={"column"} alignItems={"center"} flex={1}>
                        <Text
                            fontSize={["xl", "3xl", "5xl", "7xl"]}
                            color="primary.50"
                            fontFamily={"primary"}
                            fontWeight={900}
                        >
                            {indexPageData.hi["en-US"]} {indexPageData.Im["en-US"]}{" "}
                            {indexPageData.name["en-US"]}
                        </Text>
                        <Text
                            fontSize={["md", "xl", "3xl", "5xl"]}
                            color="secondary.400"
                            fontFamily={"secondary"}
                            fontWeight={900}
                        >
                            {indexPageData.title["en-US"]}
                        </Text>
                    </Flex>
                    <Image
                        src={`./images/${indexPageData.image}`}
                        alt={indexPageData.name["en-US"]}
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
                        <span dangerouslySetInnerHTML={{__html: journal.frontmatter.summary}}/>
                        &nbsp;<Link href={`journals/${journal.slug}`}
                                    style={{fontWeight: "bold"}}>{journal.frontmatter.readMore}</Link>
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
        return {props: {indexPageData, journals}};
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export default IndexPage;
