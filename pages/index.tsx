import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import { GetStaticProps } from "next";
import { homePageData } from "../data/pages/home/index";
import Link from "next/link";
import packageJson from "../package.json";
import Image from "next/image";

const IndexPage = ({ homePageData: HomePageData }) => {
  return (
    <Layout title="Bora Oren Showcase">
      <span style={{ fontWeight: "bold" }}>&nbsp; V{packageJson.version}</span>
      <div className="flex justify-between bg-primary-900 mt-5">
        <span
          className=" self-center 
        text-primary-50
        2xl:text-7xl
        xl:text-7xl
        lg:text-6xl
        md:text-5xl
        sm:text-4xl
        s:text-3xl
        xs:text-2xl

        2xl:pl-16
        xl:pl-16
        lg:pl-16
        md:pl-16
        sm:pl-16
        s:pl-10
        xs:pl-10
        "
        >
          <span className="font-black font-title text-primary-50">
            {homePageData.hi["en-US"]} {homePageData.Im["en-US"]}{" "}
          </span>
          <span className="font-black font-title text-primary-50">
            {homePageData.name["en-US"]}
          </span>
          <br />
          <span
            className="text-secondary-400
            font-subtitle
        font-black 
       bg-primary-800
        2xl:text-5xl
        xl:text-5xl
        lg:text-4xl
        md:text-3xl
        sm:text-2xl
        s:text-xl
        xs:text-xl
        "
          >
            {homePageData.title["en-US"]}
          </span>
        </span>
        <img src={`./images/${homePageData.image}`} className="w-1/2 -mt-10" />
      </div>
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
