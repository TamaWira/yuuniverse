import { AboutMe } from "@/components/features/about-me/about-me";
import { RecentWork } from "@/components/features/recent-works/recent-work";
import { Services } from "@/components/features/services/services";
import { Testimonials } from "@/components/features/testimonials/testimonials";
import { CTA } from "@/components/features/cta/cta";
import { Hero } from "@/components/features/hero/hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1 gap-13 md:gap-20">
        <div className="flex flex-col p-2 h-[calc(100vh-55px)]" id="home">
          <Hero />
        </div>
        <div className="mx-auto w-full max-w-[1280px] flex flex-col gap-20 md:gap-32 px-4 md:px-0">
          <section id="about-me">
            <AboutMe />
          </section>
          <section id="skills">
            <Services />
          </section>
          <section id="projects">
            <RecentWork />
          </section>
          <Testimonials />
          <section id="cta">
            <CTA />
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
