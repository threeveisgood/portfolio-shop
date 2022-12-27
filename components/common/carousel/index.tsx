import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselContainer, StyledSwiperSlide } from "./carousel.styled";

import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

interface Props {
  [imageLinks: string]: any;
}

const StyledCarousel: React.FunctionComponent<Props> = ({ imageLinks }) => {
  return (
    <CarouselContainer>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {imageLinks?.map((imageLink: string, index: number) => (
          <StyledSwiperSlide key={`slide-${index}`} tag="li">
            <img alt={"slice" + index} src={imageLink} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default StyledCarousel;
