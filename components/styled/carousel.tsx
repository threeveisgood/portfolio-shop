import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

interface Props {
  [imageLinks: string]: any;
}

const StyledCarousel: React.FunctionComponent<Props> = ({ imageLinks }) => {
  return (
    <CarouselContainer>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
      >
        {imageLinks?.map((imageLink: string, index: any) => (
          <img key={index} src={imageLink} />
        ))}
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
