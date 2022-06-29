import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import { useTrends } from "hooks/useTrends";
import LoadingSpinner from "components/styled/loading-spinner";

interface IMainSlidesFavoriteProps {}

const MainSlidesFavorite: React.FunctionComponent<IMainSlidesFavoriteProps> =
  () => {
    const { isError, isLoading, data, isFetching } = useTrends();

    return (
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div>Error: {isError}</div>
        ) : (
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
              {data.result &&
                data.result.map((data: any) => {
                  return (
                    <SwiperSlide key={data._id}>
                      <ItemCt>
                        <Link href={`/post/${data._id}`} passHref>
                          <ThumbBox>
                            {data.imageLinks.length < 1 ? (
                              <ThumbImage src="/default.png" alt={data.title} />
                            ) : (
                              <ThumbImage
                                src={data.imageLinks[0]}
                                alt={data.title}
                              />
                            )}
                          </ThumbBox>
                        </Link>
                        <Link href={`/post/${data._id}`} passHref>
                          <ItemTitle>{data.title}</ItemTitle>
                        </Link>
                        <ItemContent>
                          <ItemPrice>
                            {data.price}
                            <ShippingPrice>({data.shipping})</ShippingPrice>
                          </ItemPrice>
                          <ItemShop>{data.store}</ItemShop>
                        </ItemContent>
                      </ItemCt>
                    </SwiperSlide>
                  );
                })}
            </StyledSwiper>
          </SlideCt>
        )}
        {isFetching ? <span></span> : null}
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

const ThumbBox = styled.a`
  overflow: hidden;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-self: center;
  object-fit: fill;
  border-radius: 1rem;
`;

const ThumbImage = styled.img`
  width: 180px;
  height: 180px;
`;

const CtTitle = styled.div`
  padding: 0 1rem 2rem;
`;

const ItemTitle = styled.a`
  font-size: 1.4rem;
  padding-top: 1.2rem;
  min-height: 3.2rem;
  display: flex;
  font-weight: bold;
  color: ${(props) => props.theme.black};
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
