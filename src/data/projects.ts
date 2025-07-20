export type Project = {
  name: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Easy Dashboard",
    description: "A customizable dashboard application built for personal productivity and system monitoring.",
    repoUrl: "https://github.com/them3rcury/easy-dashboard",
  },
  {
    name: "Easy Finance",
    description: "A customizable dashboard application built for personal finance and budget management.",
    repoUrl: "https://github.com/them3rcury/easy-finance",
  },
  {
    name: "TheMercury.xyz",
    description: "Personal portfolio website showcasing projects and skills..",
    repoUrl: "https://github.com/them3rcury/themercury-xyz",
  },
  {
    name: "PrimaMateria Games",
    description: "Upcoming indie game development studio. Currently in development with exciting projects on the horizon.",
    demoUrl: "https://primamateriagames.com/",
  },
];