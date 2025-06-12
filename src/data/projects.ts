export type Project = {
  name: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Easy Dashboard",
    description: "As a fun little side project and to use it for myself as well, Easy Dashboard.",
    repoUrl: "https://github.com/them3rcury/easy-dashboard",
  },
  {
    name: "TheMercury.xyz",
    description: "The website you are currently on. Built with Next.js",
    repoUrl: "https://github.com/them3rcury/themercury-xyz",
  },
  {
    name: "PrimaMateria Games",
    description: "My game company that is coming in the next months.",
    demoUrl: "https://primamateriagames.com/",
  },
];