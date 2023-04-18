import { StyledImage, UnsetContainer } from "./carousel.styled";

interface Props {
  [imageLinks: string]: string[];
}

const StyledCarousel: React.FunctionComponent<Props> = ({ imageLinks }) => {
  return (
    <div>
      <div>
        {imageLinks?.map((imageLink: string, index: number) => (
          <UnsetContainer key={imageLink}>
            <StyledImage
              alt={"상품 이미지: " + (index + 1)}
              src={imageLink + "?w=auto&f=webp&q=75"}
              loading="eager"
            />
          </UnsetContainer>
        ))}
      </div>
    </div>
  );
};

export default StyledCarousel;
