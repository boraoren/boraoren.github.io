import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {bundleMDX} from "mdx-bundler";
import JournalModel from "../interfaces/JournalModel";
import {DateTime} from 'luxon'

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "content/journals");

export const getFileContent = (filename: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

const getCompiledMDX = async (source: string) => {
    console.log("SOURCE", source);
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
    const remarkPlugins = [];
    const rehypePlugins = [];

    return await bundleMDX({
        source, xdmOptions: (options) => {
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
        esbuildOptions: (options) => {
            options.platform = 'node'

            return options
        },
    });

    /*try {
      return await bundleMDX(content, {
        xdmOptions(options) {
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
    } catch (error) {
      throw new Error(error);
    }*/
};

export const getSingleJournal = async (slug: string) => {
    const source = getFileContent(`${slug}.mdx`);
    const {code, frontmatter} = await getCompiledMDX(source);

    return {
        frontmatter,
        code,
    };
};
export const getAllJournal = () => {
    const journals: JournalModel[] = fs
        .readdirSync(POSTS_PATH)
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(fileName);
            const slug = fileName.replace(/\.mdx?$/, "");
            const {data} = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            } as JournalModel;
        });

    return sortJournals(journals);
};


const sortJournals = (journals: JournalModel[]) => {
    return journals.sort((a, b) => {
        const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'dd/MM/yyyy')
        const afterDate = DateTime.fromFormat(b.frontmatter.date, 'dd/MM/yyyy')
        return afterDate - beforeDate
    })
}
