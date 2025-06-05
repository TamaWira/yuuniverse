import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Skills } from "@/components/features/skills/skills-section";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-[1280px] min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-13 md:gap-20">
        <div className="flex flex-col p-2 border h-[calc(100vh-55px)] xl:max-h-[1280px]">
          <Hero />
        </div>
        <div className="flex flex-col justify-center py-3 border min-h-screen">
          <AboutMe />
        </div>
        <div className="flex flex-col justify-center px-3 md:px-10 py-10 border min-h-screen">
          <Skills />
        </div>
      </main>
    </div>
  );
}
