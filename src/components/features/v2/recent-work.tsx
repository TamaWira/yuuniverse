export function RecentWork() {
  return (
    <section className="mt-10 md:mt-20 text-black">
      <h2 className="font-abhaya text-[3.5rem] font-bold leading-14">
        Products I&apos;ve built.
        <br />
        Problems I&apos;ve solved.
      </h2>
      <p className="text-black/70 max-w-1/2">
        A curated collection of the work I've built—highlighting the ideas,
        products, and experiments that shaped my journey. The biggest tile
        features my most impactful project so far.
      </p>
      <div className="mt-10 grid grid-cols-6 grid-rows-4 h-[500px] gap-6">
        <div className="col-span-4 row-span-4 border rounded-xl"></div>
        <div className="col-span-2 row-span-2 border rounded-xl"></div>
        <div className="col-span-2 row-span-1 border rounded-xl"></div>
        <div className="col-span-2 row-span-1 border rounded-xl"></div>
      </div>
    </section>
  );
}
