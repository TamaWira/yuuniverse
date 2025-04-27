import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-10 p-2">
        <div className="flex flex-col h-[calc(100vh-70px)]">
          <Hero />
        </div>
        <div className="px-5 h-screen">
          <AboutMe />
        </div>
        <div className="p-5 h-screen">
          <Skills />
        </div>
      </main>
    </div>
  );
}
