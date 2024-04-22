import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSwiper = ({ images }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={3}
    className="w-full max-w-full min-w-0"
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}>
    {images.map((image) => (
      <SwiperSlide>
        <img
          src={image}
          alt="Product"
          className="h-[353px] w-[353px] rounded-2xl"
        />
      </SwiperSlide>
    ))}
    <div className="w-10 h-10"></div>
  </Swiper>
);

export { ImageSwiper };
