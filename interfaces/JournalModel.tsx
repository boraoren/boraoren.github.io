export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  readMore: string;
}

export default interface JournalModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
}
