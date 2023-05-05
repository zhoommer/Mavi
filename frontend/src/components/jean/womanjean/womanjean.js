import { Link, Breadcrumbs, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import instance from "../../../api/axios";
import axios from "axios";
import "./womenjean.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WomanJean = () => {
  const [categories, setCategories] = useState([]);
  const [womanJeans, setWomanJeans] = useState([]);

  useEffect(() => {
    getCategories();
    getWomanJeans();
  }, []);

  const getCategories = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/categories`,
    })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWomanJeans = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/products/women-jeans/10`,
    })
      .then((res) => {
        setWomanJeans(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <Swiper slidesPerView={9}>
            <SwiperSlide>
              <a href="#" className="slider-link">
                Tüm Fitler:
              </a>
            </SwiperSlide>
            {categories.map((category) => (
              <SwiperSlide>
                <a href="#" className="slider-link">
                  {category.title}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="swiper">
        <Swiper
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="categories rounded">
                <p className="categories-text">{category.title}</p>
                <p
                  className="categories-text mt-4"
                  style={{ fontWeight: "400" }}
                >
                  {category.subtitle}
                </p>
                <a href="#">
                  <img
                    src={category.url}
                    alt="image"
                    className="categories-image"
                  ></img>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Grid container columns={{ xs: 14, sm: 14, md: 14, lg: 14 }}>
        {womanJeans.map((jean) => (
          <Grid xs={3} sm={3} md={3} lg={3} key={jean.id} className="border rounded m-4">
            <img src={ jean.url } alt={ jean.title } className="womanImages"/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WomanJean;
