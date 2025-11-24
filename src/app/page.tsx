import { AboutMe } from "@/components/features/about-me/about-me";
import { RecentWork } from "@/components/features/recent-works/recent-work";
import { Hero } from "@/components/features/hero/hero";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-13 md:gap-20">
        <div className="flex flex-col p-2 h-[calc(100vh-55px)]">
          <Hero />
        </div>
        <div className="mx-auto w-full max-w-[1280px]">
          <AboutMe />
          <RecentWork />
        </div>
      </main>
      <div className="px-3 md:px-10 py-10">{/*<Footer />*/}</div>
    </div>
  );
}
