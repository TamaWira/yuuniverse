type Props = {
  type?: "basic" | "dashed";
};

export function HorizontalLine({ type = "basic" }: Props) {
  return (
    <div
      className={`border-black/10 border-b-2 w-full ${
        type === "dashed" && "border-dashed"
      }`}
    />
  );
}
