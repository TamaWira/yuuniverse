import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-cream-200 p-4 md:p-10 min-h-screen">
      <div className="flex justify-between items-center text-black">
        <div className="border-2 border-black rounded-lg w-10 h-10" />
        <p className="font-extralight">Bayu Adhya Wiratama</p>
      </div>
      <div className="relative w-full" role="region" aria-label="Hero">
        <Image
          src="/portrait.webp"
          alt="Portrait of Janice"
          width={1000}
          height={1000}
          className="w-full"
        />

        <svg
          className="z-10 absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <mask id="cutout-mask">
              <rect x="0" y="0" width="1200" height="600" fill="white" />
              <text
                x="50%"
                y="85"
                fontSize="95"
                fontWeight="900"
                fontFamily="Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, Arial"
                fill="black"
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="-6"
              >
                Wiratama
              </text>
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="1200"
            height="100"
            fill="#eaeae3"
            mask="url(#cutout-mask)"
          />
        </svg>

        <h1 className="sr-only">Janice — Creative Designer</h1>
      </div>

      <div className="md:px-20">
        <section className="mt-10 md:mt-20 text-black">
          <h2 className="font-bold md:text-[6rem] text-4xl">About Me</h2>
          <p className="mt-5 md:w-1/2">
            I&apos;m a UI/UX Designer and WebFlow Developer based in New York.
            Creating modern, user-friendly websites that bring ideas to life.
          </p>
          <br />
          <p className="mt-5 md:w-1/2">
            I&apos;m currently working at a digital agency creating visuals for
            a well known coffee brand and side hustling as a freelancer ready
            for new challenges.
          </p>
          <div className="flex md:justify-end my-10">
            <div className="flex gap-3 md:gap-10">
              <div>
                <p className="text-4xl">10+</p>
                <p>Years of experience</p>
              </div>
              <div className="border-black border-l" />
              <div>
                <p className="text-4xl">280+</p>
                <p>Complete Projects</p>
              </div>
              <div className="border-black border-l" />
              <div>
                <p className="text-4xl">50+</p>
                <p>Clients on worldwide</p>
              </div>
            </div>
          </div>
          <div className="border-black border-b w-full" />
        </section>
      </div>
    </div>
  );
}
