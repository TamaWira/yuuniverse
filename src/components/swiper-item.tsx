import React from "react";
import { SwiperSlide } from "swiper/react";

export default function SwiperItem() {
  return (
    <SwiperSlide className="h-full">
      <div className="relative flex flex-col gap-10 h-full">
        <div className="z-10 relative bg-[#576856] mx-auto px-6 py-1 rounded-full w-fit">
          2023
        </div>
        {/* Dashed line to next slide */}
        <div className="top-[15px] left-[50%] absolute border-[#576856] border-t-2 border-dashed w-[calc(100%+50px)] h-[2px]"></div>
        <div className="flex-1 bg-[#576856] p-5 rounded-lg w-full text-left">
          {/* <div className="flex items-start gap-4">
                  <div className="mt-1 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Graduated from Udayana University</h3>
                    <p className="text-white/80 text-sm">Information Technology degree, 3.89 GPA</p>
                  </div>
                </div> */}
        </div>
      </div>
    </SwiperSlide>
  );
}
