import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

const StyledCarousel: React.FunctionComponent = () => {
  return (
    <CarouselContainer>
      <Carousel
        infiniteLoop={true}
        showThumbs={true}
        dynamicHeight={true}
        showStatus={false}
      >
        <div>
          <img src="/1.jpg" />
        </div>
        <div>
          <img src="/3.jpg" />
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

export default StyledCarousel;

const CarouselContainer = styled.div`
  display: flex;
  max-width: 60rem;
  align-items: center;
  margin: 0 auto;
`;
