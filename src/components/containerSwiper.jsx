import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Box, Button, Container, Typography } from "@mui/material";

export default function App() {
  let nextBtn = "";
  let prevBtn = "";
  useEffect(() => {
    nextBtn = document.getElementsByClassName("swiper-button-next")[0];
    nextBtn.style.opacity = 0;
    prevBtn = document.getElementsByClassName("swiper-button-prev")[0];
    prevBtn.style.opacity = 0;
    console.log(nextBtn);
  }, []);
  return (
    <>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Swiper
          // cssMode={true}
          style={{ marginTop: 80 }}
          // pagination={true}
          navigation={true}
          // mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2Ff795aaa9-7479-40c0-8eae-689db2ca2624%2Freplay-3-seat-blue-fabric-sofa_COMPRESSED.jpg&w=2160&q=75" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2F433e9787-1483-4f9b-887c-8c92ab3ce003%2FCOMPRESSED.png&w=2160&q=100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2F8389610a-9fd2-4911-8657-f73a6e9d2998%2Fpablo-designs-lighting-bola-pendant_COMPRESSED.jpg&w=2160&q=75" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2Faf0ff17d-4176-4c25-8958-59cba50549e4%2FCOMPRESSED.png&w=2160&q=100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2Fbf334d13-c0da-439b-afad-d8ddd0f44da8%2Feq3-kendall-walnut-office-desk_COMPRESSED.jpg&w=2160&q=75" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2Fc83e9f17-8c73-47e6-9cc7-4a8e0c15a14c%2Feq3-marcel-cane-bed-2023_COMPRESSED.jpg&w=2160&q=75" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fimage-service%2Fe86916d7-77ac-4083-b5cd-90041c484cb3%2Fsilk-and-snow-mattress_COMPRESSED.jpg&w=2160&q=75" />
          </SwiperSlide>
        </Swiper>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ backgroundColor: "whitesmoke", py: 5 }}
        >
          <Box>
            <Button onClick={() => prevBtn.click()}>
              {/* <ArrowForward/> */}
              {/* <ArrowForwardIosIcon /> */}
              <KeyboardArrowLeftIcon style={{ fill: "black" }} />
            </Button>
            <Button onClick={() => nextBtn.click()}>
              {/* <ArrowForward/> */}
              {/* <ArrowForwardIosIcon /> */}
              <KeyboardArrowRightIcon style={{ fill: "black" }} />
            </Button>
          </Box>
          <Typography component={"h2"} fontSize={30}>
            ENJOY UP TO 25% OFF CUSTIM UPHOLSTERY
          </Typography>
          <Typography component={"p"} fontSize={20}>
            Discover our new collection of custom upholstery products, including
            beds, mattresses, and sofas, at a 25% discount. Order now to avail
            this offer.
          </Typography>
          <Box mt={2}>
            <Button variant="contained" style={{ backgroundColor: "#000" }}>
              Shop Now
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
