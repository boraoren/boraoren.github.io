export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  readMore: string;
  image?: string;
}

export default interface PortfolioModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
}
