import clsx from "clsx";

export function Polaroid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        `w-full h-full ring ring-black/5 shadow-lg rounded-xl p-3 overflow-hidden`,
        className
      )}
    >
      <div className="w-full h-full overflow-hidden rounded-lg">{children}</div>
    </div>
  );
}
