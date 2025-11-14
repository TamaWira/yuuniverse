type Props = {
  type?: "basic" | "dashed";
};

export function HorizontalLine({ type = "basic" }: Props) {
  return (
    <div
      className={`border-black border-b w-full ${
        type === "dashed" && "border-dashed"
      }`}
    />
  );
}
