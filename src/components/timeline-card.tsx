import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  year: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  description: string;
  isLastItem: boolean;
};

export default function TimelineCard({
  year,
  icon: Icon,
  description,
  isLastItem,
}: Props) {
  return (
    <div className="relative flex flex-col gap-5 h-full">
      {/* Year */}
      <div className="z-10 relative bg-[#576856] mx-auto px-6 py-1 rounded-full w-fit text-[#F1F1EE]">
        {year}
      </div>

      {/* Dashed line to next slide */}
      {!isLastItem && (
        <div className="top-[15px] left-[50%] absolute border-[#576856] border-t-2 border-dashed w-[calc(100%+50px)] h-[2px]"></div>
      )}

      {/* Card */}
      <div className="flex-1 justify-center items-center gap-3 grid grid-cols-3 bg-[#F1F1EE] dark:bg-[#576856] p-5 border border-[#576856] dark:border-[#F1F1EE] rounded-lg ring-3 ring-black/5 w-full text-left">
        {/* Icon */}
        <Icon className="w-32 h-32" />
        {/* Description */}
        <p className="col-span-2 col-start-2">{description}</p>
      </div>
    </div>
  );
}
