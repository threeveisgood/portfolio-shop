import Image from "next/image";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 60rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2rem;

  height: auto;

  ${({ theme }) => theme.media.phoneLg} {
    max-width: 30rem;
  }
`;

export const StyledSwiper = styled(Swiper)`
  user-select: none;
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.black};
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.black};

    ${({ theme }) => theme.media.tabPort} {
      &:after {
        font-size: 2.5rem;
      }
    }
  }
  .swiper-button-next {
    color: ${({ theme }) => theme.black};

    ${({ theme }) => theme.media.tabPort} {
      &:after {
        font-size: 2.5rem;
      }
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

export const SwiperImage = styled(Image)`
  width: 100%;
  height: auto;
`;
