interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  day: number;
}

export default interface JournalModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
}
