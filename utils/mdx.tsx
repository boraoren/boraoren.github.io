import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {bundleMDX} from "mdx-bundler";
import JournalModel from "../interfaces/JournalModel";
import {DateTime} from 'luxon';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc'
import rehypeHighlight from "rehype-highlight";
import PortfolioModel from "../interfaces/JournalModel";
import {journalUtilGetJournalsByYearsWithMonths} from "./journalUtil";
import {monthNumberToMonthName} from "./dateUtil";


export const ROOT = process.cwd();
export const JOURNALS_PATH = path.join(process.cwd(), "./data/content/journals");
export const PORTFOLIOS_PATH = path.join(process.cwd(), "./data/content/portfolios");

const getCompiledMDX = async (source: string) => {

    if (process.platform === "win32") {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "esbuild.exe"
        );
    } else {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "bin",
            "esbuild"
        );
    }
    // Add your remark and rehype plugins here
    const remarkPlugins = [remarkGfm, [remarkToc, {tight: true, ordered: true}]];
    const rehypePlugins = [rehypeHighlight];

    return await bundleMDX({
        source, xdmOptions: (options) => {
            // @ts-ignore
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                ...remarkPlugins,
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                ...rehypePlugins,
            ];

            return options;
        },
    });

};

export const getSingleJournal = async (slug: string) => {
    const source = getFileContent(`${slug}.mdx`, JOURNALS_PATH);
    const {code, frontmatter} = await getCompiledMDX(source);

    return {
        frontmatter,
        code,
    };
};

export const getAllJournal = async () => {
    const years = new Set();
    const months = new Set();
    const monthlyTotalJournalInformation = {};

    const journals: JournalModel[] = fs
        .readdirSync(JOURNALS_PATH)
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(fileName, JOURNALS_PATH);
            const slug = fileName.replace(/\.mdx?$/, "");
            const {data} = matter(source);

            const date = new Date(data.date);
            const month = date.getMonth();
            const year = date.getFullYear();
            months.add(month);
            years.add(year);

            let monthlyTotalJournal = monthlyTotalJournalInformation[`${year}${month}`];

            if (monthlyTotalJournal === undefined) {
                monthlyTotalJournalInformation[`${year}${month}`]={year, month, total: 1};
            } else {
                let total = monthlyTotalJournalInformation[`${year}${month}`].total;
                total = total + 1;
                monthlyTotalJournalInformation[`${year}${month}`].total=total;

            }

            return {
                frontmatter: data,
                slug: slug,
            } as JournalModel;
        });

    return {
        journals: sortJournals(journals),
        years: Array.from(years),
        months: Array.from(months).sort((a: number, b: number) => {
            return b - a;
        }), monthlyTotalJournalInformation
    };
};

export const getSinglePortfolio = async (slug: string) => {
    const source = getFileContent(`${slug}.mdx`, PORTFOLIOS_PATH);
    const {code, frontmatter} = await getCompiledMDX(source);

    return {
        frontmatter,
        code,
    };
};


export const getStaticPathsForJournal = () => {
    const journals: JournalModel[] = fs
        .readdirSync(JOURNALS_PATH)
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(fileName, JOURNALS_PATH);
            const slug = fileName.replace(/\.mdx?$/, "");
            const {data} = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            } as JournalModel;
        });

    return sortJournals(journals).map(({slug}) => ({params: {slug}}));;
};

export const getAllPortfolio = () => {
    const portfolios: PortfolioModel[] = fs
        .readdirSync(PORTFOLIOS_PATH)
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(fileName, PORTFOLIOS_PATH);
            const slug = fileName.replace(/\.mdx?$/, "");
            const {data} = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            } as PortfolioModel;
        });

    return portfolios;
};

export const getFileContent = (filename: string, folderPath) => {
    return fs.readFileSync(path.join(folderPath, filename), "utf8");
};


const sortJournals = (journals: JournalModel[]) => {
    return journals.sort((a, b) => {
        const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'yyyy/MM/dd')
        const afterDate = DateTime.fromFormat(b.frontmatter.date, 'yyyy/MM/dd')
        return afterDate - beforeDate
    })
}
