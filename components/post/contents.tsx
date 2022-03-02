import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdRemoveRedEye, MdThumbUp } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import StyledCarousel from "components/styled/carousel";

interface IContentsProps {
  title: string;
  body: any;
  price: string;
  productURL: string;
  imageLinks: string[];
  username: string;
  date: Date;
}

const Contents: React.FunctionComponent<IContentsProps> = ({ title, body, price, productURL, imageLinks, username, date}) => {
  return (
    <ContentsContianer>
      <ContentsLayout>
        <TitleContainer>
          <Title>
            {title}
          </Title>
        </TitleContainer>

        <DetailContainer>
          <PriceAndShopContainer>
            <FlexContainer>
              <Price>{price}</Price>
              <Feature>배송비: 무료배송</Feature>
              <StoreName>쇼핑몰: G마켓</StoreName>
            </FlexContainer>
          </PriceAndShopContainer>

          <InformationContainer>
            <FlexContainer>
              <IoPersonCircleOutline />
              <UserNameInformation>{username}</UserNameInformation>
            </FlexContainer>
            <FlexContainer>
              <Count>
                <MdRemoveRedEye />
                <CountNumber>0</CountNumber>
              </Count>
              <InformationMidDot>&#183;</InformationMidDot>
              <Count>
                <BiCommentDetail />
                <CountNumber>0</CountNumber>
              </Count>
              <InformationMidDot>&#183;</InformationMidDot>
              <Count>
                <MdThumbUp />
                <CountNumber>0</CountNumber>
              </Count>
              <Count>
                <CountNumber>{date}</CountNumber>
              </Count>
            </FlexContainer>
          </InformationContainer>

          <ProductURLContainer>
          URL :&nbsp;<Link href="/"><a>{productURL}</a></Link>
          </ProductURLContainer>
    
          <StyledCarousel />
        </DetailContainer>
      </ContentsLayout>
    </ContentsContianer>
  );
};

export default Contents;

const ContentsContianer = styled.div`
  max-width: 1200px;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentsLayout = styled.div`
  border-radius: 0.4rem;
  border: 1px solid #d6d6d6;
  margin: 1rem 0 0;
  border-top: 6px solid #000;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 3rem 2.4rem 0;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 400;
`;

const DetailContainer = styled.div`
  padding: 2.5rem 2.4rem;
`;

const PriceAndShopContainer = styled.span`
  overflow: hidden;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Feature = styled.span`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  color: #3b3838;
`;

const StoreName = styled.span`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  color: #3b3838;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 2.2rem;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 0.8rem 0;
  margin: 1.5rem 0 0rem;
  justify-content: space-between;
  font-size: 2.2rem;
`;

const UserNameInformation = styled.span`
  padding-left: 0.5rem;
  font-size: 1.5rem;
`;

const FlexContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.5rem;
`;

const CountNumber = styled.span`
  padding-left: 0.4rem;
`;

const InformationMidDot = styled.span`
  padding-left: 0.8rem;
`;

const ProductURLContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e9e9e9;
  padding: 0.8rem 0;
  margin-bottom: 3rem;
  font-size: 1.4rem;
`;
