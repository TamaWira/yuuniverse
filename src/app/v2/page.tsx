import { V2AboutMe } from "@/components/features/v2/about-me";
import { V2Hero } from "@/components/features/v2/hero";
import { MyServices } from "@/components/features/v2/my-services";
import { V2Navbar } from "@/components/features/v2/navbar";
import { RecentWork } from "@/components/features/v2/recent-work";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="bg-cream-200 p-4 md:p-10 min-h-screen">
          <V2Navbar />
          <V2Hero />

          <div className="space-y-14 md:space-y-40">
            <V2AboutMe />
            <SectionSeparator />
            <RecentWork />
            <SectionSeparator />
            <MyServices />
            <SectionSeparator />
          </div>
        </div>
      </main>
      <footer className="bg-primary-500 w-full h-20 text-white"></footer>
    </>
  );
}
