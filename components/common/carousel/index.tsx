import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import {
  CarouselContainer,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperImage,
} from "./carousel.styled";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

interface Props {
  [imageLinks: string]: any;
}

const StyledCarousel: React.FunctionComponent<Props> = ({ imageLinks }) => {
  return (
    <CarouselContainer>
      <StyledSwiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {imageLinks?.map((imageLink: string, index: number) => (
          <StyledSwiperSlide key={`slide-${index}`} tag="li">
            <SwiperImage
              priority={true}
              alt={"slice" + index}
              src={imageLink + "?f=webp&q=75"}
              layout="fill"
            />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
};

export default StyledCarousel;
