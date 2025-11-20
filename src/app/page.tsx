import { V2AboutMe } from "@/components/features/v2/about-me";
import { RecentWork } from "@/components/features/v2/recent-work";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-13 md:gap-20">
        <div className="flex flex-col p-2 h-[calc(100vh-55px)]">
          <Hero />
        </div>
        <div className="mx-auto w-full max-w-[1280px]">
          <V2AboutMe />
          <RecentWork />
        </div>
      </main>
      <div className="px-3 md:px-10 py-10">{/*<Footer />*/}</div>
    </div>
  );
}
