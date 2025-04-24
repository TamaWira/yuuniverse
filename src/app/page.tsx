import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-10 p-2">
        <div className="flex flex-col h-[calc(100vh-70px)]">
          <Hero />
        </div>
        <div className="h-screen">
          <AboutMe />
        </div>
      </main>
    </div>
  );
}
