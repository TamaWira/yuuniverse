import { Skill } from "./types";

export const skills: Skill[] = [
  {
    title: "Frontend",
    description: "I build interactive, accessible, and performant UIs.",
    tools: [
      { name: "React", image: "/react.svg" },
      { name: "Next", image: "/next.svg" },
      { name: "TypeScript", image: "/typescript.svg" },
      { name: "Tailwind CSS", image: "/tailwind.svg" },
      { name: "Redux", image: "/redux.svg" },
      { name: "Vercel", image: "/vercel.svg" },
      { name: "HTML", image: "/html.svg" },
      { name: "CSS", image: "/css.svg" },
      { name: "Javascript", image: "/javascript.svg" },
    ],
  },
  {
    title: "Backend",
    description: "",
    tools: [
      { name: "Node.js", image: "/node.svg" },
      { name: "Express.js", image: "/express.svg" },
      { name: "TypeScript", image: "/typescript.svg" },
      { name: "REST API", image: "/rest-api.svg" },
      { name: "PostgreSQL", image: "/postgresql.svg" },
      { name: "Fly.io", image: "/fly-io.svg" },
    ],
  },
  {
    title: "Tools & Others",
    description: "",
    tools: [
      { name: "Git", image: "/git.svg" },
      { name: "Docker", image: "/docker.svg" },
      { name: "CI/CD", image: "/ci-cd.webp" },
    ],
  },
];
