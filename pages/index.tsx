import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {GetStaticProps} from "next";
import {indexPageData} from "../data/indexPageData";
import packageJson from "../package.json";
import IndexPageDataModel from "../interfaces/IndexPageDataModel";
import JournalModel from "../interfaces/JournalModel";

import {Box, Button, Center, Flex, Heading, Image, Link, Text, useColorMode,} from "@chakra-ui/react";
import JournalSummary from "../components/molecules/journal/summary";
import {getAllJournal} from "../utils/mdx";
import {dateToDay, monthNumberToMonthName} from "../utils/dateUtil";
import {useRouter} from 'next/router'


const IndexPage: React.FC<{
    indexPageData: IndexPageDataModel;
    journals: JournalModel[];
    years: number[];
    months: number[];
    monthlyTotalJournalInformation: any;
}> = ({
          indexPageData,
          journals,
          years,
          months,
          monthlyTotalJournalInformation
      }) => {

    const {colorMode, toggleColorMode} = useColorMode();
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [selectedMonth, setSelectedMonth] = useState(months[0]);
    const [filteredJournals, setFilteredJournals] = useState([] as JournalModel[]);
    const [mouseOverJournalState, setMouseOverJournalState] = useState("" as string);
    const router = useRouter()

    useEffect(() => {
        const filteredJournals = journals.filter((journal) => {
            const date = new Date(journal.frontmatter.date);
            const year = date.getFullYear();
            //const month = date.getMonth();
            //return year === selectedYear && month === selectedMonth;
            return year === selectedYear;
        })
        setFilteredJournals(filteredJournals);
    }, [journals, selectedMonth, selectedYear])

    return (
        <Layout title={indexPageData.pageTitle["en-US"]}>

            <Flex m={2} justifyContent={"space-between"}>
                <Flex gap={3} mt={1}>
                    <Text
                        fontSize={["sm", "md", "lg", "lg"]}
                        fontWeight="bold"
                        mt={1}
                    >
                        🚀 Side Projects:
                    </Text>
                    <Link
                        href="side-projects/project-management"
                        bg="primary.900"
                        color="white"
                        p={1}
                        borderRadius={5}
                        fontSize={["sm", "md", "lg", "lg"]}
                        right={"0px"}
                        top={"-10px"}
                    >
                        Project Management
                    </Link>
                </Flex>
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
            {years.length > 1 &&
                <Flex
                    position="sticky"
                    mt={-59}
                    ml={-2}
                    mr={1}
                    p={2}
                    borderRadius={10}>
                    {/*<Text color="primary.900"
                          alignSelf="center"
                          fontWeight={"bold"}
                          fontSize={["md", "lg", "xl", "2xl"]}
                    >Journals</Text>*/}
                    <Flex gap={1}>
                        {years.map((year, key) => {
                            const isSelectedYear = selectedYear === year;
                            return <Button
                                key={key}
                                colorScheme="blue"
                                ml={5}
                                variant={isSelectedYear ? "solid" : "link"}
                                fontWeight={"bold"}
                                fontSize={["md", "md", "xl", "2xl"]}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </Button>
                        })}
                    </Flex>
                    {/*<Flex gap={2}>
                        {months.map((month) => {
                            const isSelectedMonth = selectedMonth === month;
                            return monthlyTotalJournalInformation[`${selectedYear}${month}`] && <Button
                                colorScheme="blackAlpha"
                                variant={isSelectedMonth ? "solid" : "link"}
                                fontWeight={"bold"}
                                fontSize={["md", "lg", "xl", "2xl"]}
                                onClick={() => setSelectedMonth(month)}
                            >
                                {monthNumberToMonthName(month)} ({monthlyTotalJournalInformation[`${selectedYear}${month}`].total})
                            </Button>
                        })}
                    </Flex>*/}
                </Flex>}

            {filteredJournals.map((journal, key) => {
                const date = dateToDay(journal.frontmatter.date);
                return <Box key={key}
                            mt={2}
                            ml={1}
                            href={`journals/${journal.slug}`}
                            style={{fontWeight: "bold", cursor: "pointer"}}
                            onMouseOver={() => setMouseOverJournalState(journal.frontmatter.date)}
                            onMouseOut={() => setMouseOverJournalState("")}
                            onFocus={() => setMouseOverJournalState(journal.frontmatter.date)}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(`journals/${journal.slug}`)
                            }}>
                    <JournalSummary
                        day={date.day}
                        state={mouseOverJournalState === journal.frontmatter.date ? "over" : "default"}
                        month={monthNumberToMonthName(date.month)}>
                        <>
                            <Heading as="h1" size="lg">{journal.frontmatter.title}</Heading>
                            <span dangerouslySetInnerHTML={{__html: journal.frontmatter.summary}}/>
                            &nbsp;<Link href={`journals/${journal.slug}`}
                                        style={{fontWeight: "bold"}}>{journal.frontmatter.readMore}</Link>
                        </>
                    </JournalSummary>
                </Box>
            })}
        </Layout>
    );
};

/*
<div className="relative h-screen bg-black bg-opacity-75 w-1/2"/>
*/

export const getStaticProps: GetStaticProps = async () => {
    try {
        const allJournals = await getAllJournal();

        return {
            props: {
                indexPageData,
                journals: allJournals.journals,
                years: allJournals.years,
                months: allJournals.months,
                monthlyTotalJournalInformation: allJournals.monthlyTotalJournalInformation,
            }
        };
    } catch (err) {
        return {props: {errors: err.message}};
    }
};

export default IndexPage;
