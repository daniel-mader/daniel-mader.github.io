export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  tags: Tag[];
}

export enum Tag {
  Security = 'SECURITY',
  Backend = 'BACKEND',
  Frontend = 'FRONTEND'
}
