export interface ResearchArticle {
  _id?: string;
  title: string;
  summary: string;
  source: string;
  link: string;
  publishedAt: Date;
  tags: string[];
  doi?: string;
  pmid?: string;
  featured?: boolean;
  createdAt?: Date;
}

export interface ResearchQuery {
  tag?: string;
  source?: string;
  months?: number;
  limit?: number;
  skip?: number;
}
