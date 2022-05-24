import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

interface IMainSlidesFavoriteProps {}

const MainSlidesFavorite: React.FunctionComponent<IMainSlidesFavoriteProps> = (
  props
) => {
  return (
    <>
      <SlideCt>
        <CtTitle>
          <h2>뜨는 핫딜</h2>
        </CtTitle>
        <StyledSwiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ItemCt key="">
              <ThumbBox>
                <img src="/1.jpg" />
              </ThumbBox>
              <ItemTitle>Mr. Morale and Big Steppers</ItemTitle>
              <ItemContent>
                <ItemPrice>50000원</ItemPrice>
                <ItemShop>11번가</ItemShop>
              </ItemContent>
            </ItemCt>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCt>
              <ThumbBox>
                <img src="/1.jpg" />
              </ThumbBox>
              <ItemTitle>아이패드 프로 5세대</ItemTitle>
              <ItemContent>
                <ItemPrice>50000원</ItemPrice>
                <ItemShop>g마켓</ItemShop>
              </ItemContent>
            </ItemCt>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCt>
              <ThumbBox>
                <img src="/1.jpg" />
              </ThumbBox>
              <ItemTitle>Mr. Morale and Big Steppers</ItemTitle>
            </ItemCt>
          </SwiperSlide>
          <SwiperSlide>
            <ItemCt>
              <ThumbBox>
                <img src="/1.jpg" />
              </ThumbBox>
              <ItemTitle>Mr. Morale and Big Steppers</ItemTitle>
            </ItemCt>
          </SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
          <SwiperSlide>6</SwiperSlide>
          <SwiperSlide>7</SwiperSlide>
          <SwiperSlide>8</SwiperSlide>
          <SwiperSlide>9</SwiperSlide>
        </StyledSwiper>
      </SlideCt>
    </>
  );
};

export default MainSlidesFavorite;

const SlideCt = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

const StyledSwiper = styled(Swiper)`
  & > .swiper-button-prev {
    left: 0;
  }

  & > .swiper-button-next {
    right: 0;
  }

  & > .swiper-button-prev,
  & > .swiper-button-next {
    background: ${(props) => props.theme.black};
    color: #ffff;
    border-radius: 0.3rem;
    top: 43%;
    padding: 0.2rem;

    &:after {
      font-size: 3rem;
    }
  }
`;

const ItemCt = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbBox = styled.div`
  overflow: hidden;
  width: 180px;
  height: 180px; // 임시
  display: flex;
  align-self: center;
  border-radius: 1rem;
`;

const CtTitle = styled.div`
  padding: 0 3rem 2rem;
`;

const ItemTitle = styled.div`
  font-size: 1.5rem;
  padding-top: 1.2rem;
  //text-align: center;
  display: flex;
  font-weight: bold;
`;

const ItemContent = styled.div`
  font-size: 1.4rem;
  padding-top: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const ItemPrice = styled.span``;

const ItemShop = styled.span``;

const StyleSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 1.8rem;
  background: gray;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)``;
