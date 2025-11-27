import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function CTA() {
  return (
    <section className="mt-10 md:mt-20 py-20 text-black flex flex-col items-center text-center space-y-8 bg-neutral-100 dark:bg-neutral-900/30 rounded-3xl">
      <div className="space-y-4 max-w-2xl px-4">
        <h2 className="font-abhaya font-bold text-[3.5rem] leading-14">
          Ready to start your project?
        </h2>
        <p className="text-black/70 text-lg md:text-xl">
          Let&apos;s collaborate and turn your vision into reality. Whether you
          need a new website, a complex web app, or data solutions, I&apos;m here
          to help.
        </p>
      </div>

      <Link
        target="_blank"
        href="https://linkedin.com/in/iputubayuadhyawiratama"
        className="flex justify-between items-center gap-3 bg-white hover:bg-neutral-50 active:bg-neutral-100 dark:bg-[#576856] dark:hover:bg-white p-1 pr-2 dark:border-white rounded-full dark:hover:text-black dark:text-white text-base transition-all shadow-md hover:shadow-lg w-fit min-w-[200px]"
      >
        <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center">
            <span className="text-2xl">👋</span>
        </div>
        <p className="font-medium">Get in Touch</p>
        <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
          <ExternalLink size={20} />
        </div>
      </Link>
    </section>
  );
}
