export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  time: number;
  readMore: string;
  tags?: string[];
  tag?: string;
  type: "JOURNAL" | "SIDE_PROJECT"
}

export default interface JournalModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
}

export default interface PortfolioModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
}
