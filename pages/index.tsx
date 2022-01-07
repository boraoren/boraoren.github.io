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
} from "@chakra-ui/react";

const IndexPage = ({ homePageData: HomePageData }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout title={homePageData.pageTitle["en-US"]}>
      <Flex m={2} justifyContent={"space-between"}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Tag variant="subtle">
          V{packageJson.version}
        </Tag>
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
      </Box>
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
