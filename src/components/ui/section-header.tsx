import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: Props) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="bg-white/5 px-5 py-1 border-2 rounded-full font-extralight text-sm lg:text-xl">
        {children}
      </h2>
      <div className="flex-1 my-auto border-b" />
    </div>
  );
}
