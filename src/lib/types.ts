export type Tool = {
  name: string;
  image: string;
};

export type Skill = {
  title: string;
  description: string;
  tools: Tool[];
};
