import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Database } from "lucide-react";

const services = [
  {
    title: "Product Design",
    description:
      "Crafting intuitive and beautiful user experiences that solve real problems.",
    icon: <Palette className="size-6 text-primary-500" />,
    techStack: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
  },
  {
    title: "Fullstack Web Development",
    description:
      "Building robust, scalable, and high-performance web applications from scratch.",
    icon: <Code className="size-6 text-primary-500" />,
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Data Scraping & Analysis",
    description:
      "Extracting valuable insights from data to drive informed business decisions.",
    icon: <Database className="size-6 text-primary-500" />,
    techStack: ["Python", "Pandas", "Selenium", "BeautifulSoup", "SQL"],
  },
];

export function Services() {
  return (
    <section className="mt-10 md:mt-20 text-black flex flex-col lg:flex-row gap-10 lg:gap-16">
      <div className="lg:flex-shrink-0 lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-abhaya font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight md:leading-14">
          Services I Offer.
          <br />
          Solutions I Deliver.
        </h2>
        <p className="text-black/70 mt-4">
          From pixel-perfect designs to powerful backend systems, I provide a
          comprehensive range of services to help you build, scale, and optimize
          your digital presence.
        </p>
      </div>

      <div className="lg:flex-1">
        <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-neutral-900/50"
          >
            <CardHeader>
              <div className="mb-4 w-fit p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-bold font-display">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}
