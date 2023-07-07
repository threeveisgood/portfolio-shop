import styled from "styled-components";

export const PriceAndCategoryContainer = styled.span`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.priceColor};

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1.7rem;
  }
`;

export const Category = styled.span`
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Feature = styled(Category)``;

export const StoreName = styled(Category)`
  margin-left: 1.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 2.2rem;
  margin: 1.2rem 0 0rem;
  padding: 0.8rem 0;
  justify-content: space-between;
  font-size: 2.2rem;

  & + & {
    margin: 0;
  }
`;

export const UserNameInformation = styled.span`
  padding-left: 0.5rem;
  font-size: 1.4rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1.2rem;
  }
`;

export const FlexContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const Count = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.6rem;
  font-weight: 400;

  &.no-padding-left {
    padding-left: 0;
  }
`;

export const CountNumber = styled.span`
  font-size: 1.4rem;
  padding-left: 0.2rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1.2rem;
  }
`;

export const InformationMidDot = styled.span`
  padding-left: 0.8rem;
`;

export const ProductURLContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const UrlBox = styled.div`
  //display: flex;
  //align-items: center;
  padding: 0.8rem 0;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  word-break: break-all;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1rem;
  }
`;

export const LightWeight = styled.span`
  font-weight: 400;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MobileDateInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const DateInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const PostContent = styled.div`
  font-size: 1.5rem;
  color: #333130;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
