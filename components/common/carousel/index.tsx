import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselContainer } from "./carousel.styled";

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
