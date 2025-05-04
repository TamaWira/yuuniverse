import { TIMELINES } from "@/constants/timelines";
import { Pagination } from "swiper/modules";

export const getSwiperConfig = (items: typeof TIMELINES) => ({
    modules: [Pagination],
    pagination: true,
    className: "flex flex-1 justify-between w-full md:h-full",
    breakpoints: {
      768: {
        spaceBetween: 50,
        slidesPerView: 2.5,
        slidesOffsetBefore: 150,
        slidesOffsetAfter: 150,
        pagination: {
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet swiper-pagination-bullet-timeline",
          bulletActiveClass:
            "swiper-pagination-bullet-active swiper-pagination-bullet-active-timeline",
          renderBullet: function (index: number, className: string) {
            if (index < items.length - 1) {
              return `<span class="${className}"></span>`;
            } else {
              return "";
            }
          },
        },
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet swiper-pagination-bullet-timeline",
          bulletActiveClass:
            "swiper-pagination-bullet-active swiper-pagination-bullet-active-timeline",
        },
      },
    },
  });