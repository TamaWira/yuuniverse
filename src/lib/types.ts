export type Tool = {
  name: string;
  image: string;
};

export type Skill = {
  coverImage: string;
  title: string;
  description: string;
  tools: Tool[];
};
