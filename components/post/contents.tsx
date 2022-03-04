import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdRemoveRedEye, MdThumbUp } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import StyledCarousel from "components/styled/carousel";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface IContentsProps {
  title: string;
  body: any;
  price: string;
  productURL: string;
  imageLinks: string[];
  username: string;
  store: string;
  shipping: string;
  category: string;
  date: Date;
}

const Contents: React.FunctionComponent<IContentsProps> = ({
  title,
  body,
  price,
  productURL,
  imageLinks,
  username,
  date,
  store,
  shipping,
  category,
}) => {
  const postDate = dayjs(date).format("YYYY-MM-DD HH:mm");
  const mobileDate = dayjs().to(dayjs(date));

  return (
    <ContentsContianer>
      <ContentsLayout>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>

        <DetailContainer>
          <PriceAndCategoryContainer>
            <Price>{price}</Price>
            <Category>{category}</Category>
          </PriceAndCategoryContainer>

          <InformationContainer>
            <Count className="no-padding-left">
              <Feature>배송비: {shipping}</Feature>
              <StoreName>쇼핑몰: {store}</StoreName>
            </Count>
            <Count>
              <CountNumber>
                <DateInfo>{postDate}</DateInfo>
              </CountNumber>
              <CountNumber>
                <MobileDateInfo>{mobileDate}</MobileDateInfo>
              </CountNumber>
            </Count>
          </InformationContainer>

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
            </FlexContainer>
          </InformationContainer>

          <ProductURLContainer>
            URL :&nbsp;
            <Link href="/">
              <a>{productURL}</a>
            </Link>
          </ProductURLContainer>

          {imageLinks.length != 0 ? (
            <StyledCarousel imageLinks={imageLinks} />
          ) : null}

          <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </DetailContainer>
      </ContentsLayout>
    </ContentsContianer>
  );
};

export default Contents;

const ContentsContianer = styled.div`
  max-width: 1200px;
  background: #faf7f0;
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
  padding: 2.3rem 2.4rem;
`;

const PriceAndCategoryContainer = styled.span`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Category = styled.span`
  font-size: 1.3rem;
`;

const Feature = styled.span`
  font-size: 1.2rem;
  color: #3b3838;
`;

const StoreName = styled(Feature)`
  margin-left: 1.5rem;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 2.2rem;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  margin: 1.5rem 0 0rem;
  padding: 0.8rem 0;
  justify-content: space-between;
  font-size: 2.2rem;

  & + & {
    margin: 0;
  }
`;

const UserNameInformation = styled.span`
  padding-left: 0.5rem;
  font-size: 1.4rem;
`;

const FlexContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.6rem;

  &.no-padding-left {
    padding-left: 0;
  }
`;

const CountNumber = styled.span`
  font-size: 1.4rem;
  padding-left: 0.2rem;
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

const MobileDateInfo = styled.p`
  font-size: 1.2rem;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const DateInfo = styled.p`
  font-size: 1.4rem;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: #333130;
`;
