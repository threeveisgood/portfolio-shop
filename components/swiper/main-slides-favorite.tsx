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
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={6}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            },
            400: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            660: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            780: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 15,
            },
            980: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ItemCt key="">
              <ThumbBox>
                <img src="/1.jpg" />
              </ThumbBox>
              <ItemTitle>Mr. Morale and Big Steppers</ItemTitle>
              <ItemContent>
                <ItemPrice>
                  50000원<ShippingPrice>(2500원)</ShippingPrice>
                </ItemPrice>
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
              <ItemTitle>아이패드 프로 5세대</ItemTitle>
              <ItemContent>
                <ItemPrice>
                  50000원<ShippingPrice>(2500원)</ShippingPrice>
                </ItemPrice>
                <ItemShop>g마켓</ItemShop>
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
                <ItemPrice>
                  50000원<ShippingPrice>(2500원)</ShippingPrice>
                </ItemPrice>
                <ItemShop>g마켓</ItemShop>
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
                <ItemPrice>
                  50000원<ShippingPrice>(2500원)</ShippingPrice>
                </ItemPrice>
                <ItemShop>g마켓</ItemShop>
              </ItemContent>
            </ItemCt>
          </SwiperSlide>
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
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StyledSwiper = styled(Swiper)`
  & > .swiper-button-prev {
    left: 0.1rem;
  }

  & > .swiper-button-next {
    right: 0.1rem;
  }

  & > .swiper-button-prev,
  & > .swiper-button-next {
    background: ${(props) => props.theme.black};
    color: #ffff;
    border-radius: 0.3rem;
    top: 38%;
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
  padding: 0 1rem 2rem;
`;

const ItemTitle = styled.div`
  font-size: 1.4rem;
  padding-top: 1.2rem;
  min-height: 3.2rem;
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

const ItemPrice = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`;

const ItemShop = styled.span`
  font-weight: normal;
  font-size: 1.3rem;
`;

const ShippingPrice = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.gray};
`;

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
