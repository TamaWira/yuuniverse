import Image from "next/image";

export function V2Hero() {
  return (
    <section className="relative w-full" role="region" aria-label="Hero">
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
              fontSize="92"
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
    </section>
  );
}
