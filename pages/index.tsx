import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import { GetStaticProps } from "next";
import { homePageData } from "../data/pages/home/index";
import Link from "next/link";
import packageJson from "../package.json";

import {
  Button,
  Flex,
  Tag,
  Box,
  Image,
  Text,
  useColorMode,
  createIcon,
  useColorModeValue,
  Icon,
  Circle,
  Container,
  Square,
} from "@chakra-ui/react";
import JournalSummary from "../components/molecules/journal/summary";

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

const IndexPage = ({ homePageData: HomePageData }) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
      <JournalSummary date={12}>
        Nice weather, nice mood. Try to implement version style in the blog of
        mine. What I used, <b style={{ color: "#4299E1" }}>chakra-ui</b>. Try to
        implement version style in the blog
      </JournalSummary>
      <JournalSummary date={11}>
        I was designing small <b style={{ color: "#4299E1" }}>date component</b>{" "}
        to write accentance criteria. What I found in{" "}
        <Icon viewBox="0 0 200 200" color="red.500">
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
        </Icon>
        &nbsp; there is a variant to create different component state like clicked,
        enabled, hovered etc. Do you want how? <b>Click here</b> 😊
      </JournalSummary>
    </Layout>
  );
};

/*
<div className="relative h-screen bg-black bg-opacity-75 w-1/2" />
*/

export const getStaticProps: GetStaticProps = async () => {
  try {
    return { props: { homePageData: homePageData } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;
