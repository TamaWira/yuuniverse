import { HorizontalLine } from "@/components/ui/horizontal-line";
import { ArrowUp } from "lucide-react";

export function MyServices() {
  return (
    <section className="mt-10 md:mt-20 text-black">
      <div className="md:px-28">
        <h2 className="font-specify font-black md:text-[6rem] text-4xl">
          My Services
        </h2>
        <p className="mt-5 md:w-1/2 text-black/70 md:text-xl text-justify">
          A personal portfolio&apos;s inside section provides a detailed look at
          the creator&apos;s work, showcasing their skills, process, and
          expertise.
        </p>
        <div className="my-20">
          <div className="flex justify-between items-center">
            <h3 className="font-specify font-black text-5xl">
              Landing Page Enhancement
            </h3>
            <button className="flex items-center justify-center border h-14 w-14 hover:bg-primary-500 hover:text-white hover:border-white">
              <ArrowUp />
            </button>
          </div>
          <div className="my-10">
            <HorizontalLine type="dashed" />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-specify font-black text-5xl">Web Scraping</h3>
            <button className="flex items-center justify-center border h-14 w-14 hover:bg-primary-500 hover:text-white hover:border-white">
              <ArrowUp />
            </button>
          </div>
          <div className="my-10">
            <HorizontalLine type="dashed" />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-specify font-black text-5xl">
              Mobile Development
            </h3>
            <button className="flex items-center justify-center border h-14 w-14 hover:bg-primary-500 hover:text-white hover:border-white">
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
