import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-[1280px] min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-10">
        <div className="flex flex-col p-2 h-[calc(100vh-55px)] xl:max-h-[1280px]">
          <Hero />
        </div>
        <div className="py-10 h-screen">
          <AboutMe />
        </div>
        <div className="p-5 h-screen">
          <Skills />
        </div>
      </main>
    </div>
  );
}
