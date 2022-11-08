import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 80rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;
