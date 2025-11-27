import Image from "next/image";
import { Github } from "@/components/icons/github";
import { Polaroid } from "@/components/ui/polaroid";
import { MoveUpRight } from "@/components/icons/move-up-right";

export function RecentWork() {
  return (
    <section className="mt-10 md:mt-20 text-black">
      <h2 className="font-abhaya font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight md:leading-14">
        Products I&apos;ve built.
        <br />
        Problems I&apos;ve solved.
      </h2>
      <p className="text-black/70">
        A curated collection of the work I&apos;ve built—highlighting the ideas,
        products, and experiments that shaped my journey. The biggest tile
        features my most impactful project so far.
      </p>
      <div className="gap-6 grid grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 mt-10">
        <div className="col-span-2 lg:col-span-4 lg:row-span-2">
          <div className="space-y-5">
            <Polaroid>
              <Image
                src="/kja-winduarsa.png"
                alt="Hero"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </Polaroid>
            <div className="space-y-3">
              <p className="font-abhaya font-bold text-3xl">
                Winduarsa Accounting Firm Portfolio Website
              </p>
              <p className="text-black/60 text-justify">
                A modern portfolio website built for Winduarsa, an accounting
                firm with over 20 years of experience. Designed for clarity and
                trust, the site achieves excellent performance across all Core
                Web Vitals, ranks on Google&apos;s second page within a week of
                launch, and includes full analytics integration for ongoing
                insights.
              </p>
              <div className="flex items-center gap-3">
                <Github />
                <MoveUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-1">
          <div className="space-y-5">
            <Polaroid>
              <Image
                src="/fooloos.png"
                alt="Hero"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </Polaroid>
            <div className="flex justify-between gap-10">
              <p>Fooloos - Personal Finance Tracker</p>
              <div className="flex gap-3">
                <Github />
                <MoveUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-1">
          <div className="space-y-5">
            <Polaroid>
              <Image
                src="/kaboor.png"
                alt="Hero"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </Polaroid>
            <div className="flex justify-between gap-10">
              <p>Kaboor - Online Travel Platform</p>
              <div className="flex gap-3">
                <Github />
                <MoveUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
