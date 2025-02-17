"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import styles from "./styles.module.scss";
import { SwiperOptions } from "swiper/types";
import { cloneElement, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props extends SwiperOptions {
  children: JSX.Element | JSX.Element[];
}

export default function Slider({ children, autoplay }: Props) {
  const isList = children instanceof Array;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.slider}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: styles.disable,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1440: { slidesPerView: 4, spaceBetween: 20 },
        }}
        pagination={{
          clickable: true,
          el: ".pagination",
          renderBullet: (index, className) => {
            return `<span class="swiper-pagination-bullet ${styles.bullet}">${
              index + 1
            }</span>`;
          },
        }}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}>
        {children}
      </Swiper>

      <div className={styles.arrows}>
        <div className={"swiper-button image-swiper-button-prev"}>
          <Icon icon='carbon:previous-filled' />
        </div>
        <div className={`pagination ${styles.pagination}`}></div>
        <div className={"swiper-button image-swiper-button-next"}>
          <Icon icon='carbon:next-filled' />
        </div>
      </div>
    </div>
  );
}
