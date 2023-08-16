export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  time: number;
  readMore: string;
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
