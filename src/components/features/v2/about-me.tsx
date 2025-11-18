import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { LinkedIn } from "@/components/icons/linkedin";
import { MoveRight } from "@/components/icons/move-right";
import { HorizontalLine } from "@/components/ui/horizontal-line";
import Image from "next/image";

export function V2AboutMe() {
  return (
    <section className="mt-10 md:mt-20 text-black flex gap-20">
      <div className="flex-1">
        <div className="w-full h-[400px] ring ring-black/5 shadow-lg -rotate-1 rounded-xl p-3 overflow-hidden">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src="/hero-image.png"
              alt="Hero"
              className="object-cover w-full h-full scale-190 -translate-y-10"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex gap-5 items-center">
            <Instagram />
            <LinkedIn />
            <Github />
          </div>
          <div className="text-right">
            <p>I Putu Bayu Adhya Wiratama</p>
            <p className="text-black/50">Software Developer</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="font-abhaya text-[3.5rem] font-bold leading-14">
          Hi, I&apos;m Bayu - A Builder With a Clear Design Sense
        </h2>
        <div className="mt-4 flex-1 flex flex-col justify-between">
          <p className="text-black/70">
            I&apos;m a full-stack engineer who loves creating seamless digital
            experiences. I work across the stack—from crafting responsive,
            accessible interfaces to designing backend systems that scale
            cleanly. My philosophy is simple:{" "}
            <span className="font-bold text-black">
              clarity, intention, and craftsmanship in every line of code.
            </span>
          </p>
          <div className="flex gap-10 mt-24">
            <div className="border-l-3 border-black/20" />
            <div className="w-full space-y-5">
              <div className="grid grid-cols-3 justify-items-start">
                <p className="font-bold">Node.js Developer</p>
                <p className="text-black/50 ml-4">Astra International</p>
                <div className="flex justify-self-end gap-3">
                  <p>2025</p>
                  <MoveRight />
                  <p>Now</p>
                </div>
              </div>
              <HorizontalLine />
              <div className="grid grid-cols-3 justify-items-start">
                <p className="font-bold">Fullstack Developer</p>
                <p className="text-black/50 ml-4">Airestate</p>
                <div className="flex justify-self-end gap-3">
                  <p>2024</p>
                  <MoveRight />
                  <p>2025</p>
                </div>
              </div>
              <HorizontalLine />
              <div className="grid grid-cols-3 justify-items-start">
                <p className="font-bold">Data Analyst</p>
                <p className="text-black/50 ml-4">In Fashion</p>
                <div className="flex justify-self-end gap-3">
                  <p>2023</p>
                  <MoveRight />
                  <p>2024</p>
                </div>
              </div>
              <HorizontalLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
