export function V2AboutMe() {
  return (
    <div className="md:px-28">
      <section className="mt-10 md:mt-20 text-black">
        <h2 className="font-specify font-black md:text-[6rem] text-4xl">
          About Me
        </h2>
        <p className="mt-5 md:w-1/2 text-black/70 md:text-xl text-justify">
          I&apos;m a UI/UX Designer and WebFlow Developer based in New York.
          Creating modern, user-friendly websites that bring ideas to life.
        </p>
        <br />
        <p className="mt-5 md:w-1/2 text-black/70 md:text-xl text-justify">
          I&apos;m currently working at a digital agency creating visuals for a
          well known coffee brand and side hustling as a freelancer ready for
          new challenges.
        </p>
        <div className="flex md:justify-end my-10">
          <div className="flex gap-3 justify-between md:gap-10">
            <div>
              <p className="text-4xl md:text-6xl font-bold">10+</p>
              <p className="md:text-md text-black/70 leading-none">
                Years of experience
              </p>
            </div>
            <div className="border-black border-l" />
            <div>
              <p className="text-4xl md:text-6xl font-bold">280+</p>
              <p className="md:text-md text-black/70 leading-none">
                Complete Projects
              </p>
            </div>
            <div className="border-black border-l" />
            <div>
              <p className="text-4xl md:text-6xl font-bold">50+</p>
              <p className="md:text-md text-black/70 leading-none">
                Clients on worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
