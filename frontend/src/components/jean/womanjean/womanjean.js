import { Link, Breadcrumbs } from "@mui/material";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./womenjean.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WomanJean = () => {
  const breadcrumbs = [
    <Link href="/" key={"1"} color={"inherit"} fontSize={"13px"}>
      Anasayfa
    </Link>,
    <Link href="/kadin" key={"2"} color={"inherit"} fontSize={"13px"}>
      Kadın
    </Link>,
    <Link href="/jean" key={"3"} color={"text.primary"} fontSize={"13px"}>
      Jean
    </Link>,
  ];
  return (
    <div>
      <Breadcrumbs
        style={{ backgroundColor: "#EBEDEF" }}
        separator={<MdNavigateNext fontSize={"small"} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

      <div className="product-list-banner">
        <div className="product-title fs-2">JEAN</div>

        <div className="product-category-list">
          <Swiper slidesPerView={8}>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Tüm Fitler:
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Skinny
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Mom
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Flare - Bootcut
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Wide Leg
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Boyfriend
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Slim Straight
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Loose Straight
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Hamile / Maternity
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Büyük Beden / Curvy Plus
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="swiper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WomanJean;
