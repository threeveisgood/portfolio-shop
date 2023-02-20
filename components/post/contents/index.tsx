import * as React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import Link from "next/link";
import StyledCarousel from "components/common/carousel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import {
  PriceAndCategoryContainer,
  Price,
  Category,
  Feature,
  StoreName,
  InformationContainer,
  UserNameInformation,
  FlexContainer,
  Count,
  CountNumber,
  InformationMidDot,
  UrlBox,
  LightWeight,
  MobileDateInfo,
  DateInfo,
  PostContent,
} from "./content.styled";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ContentsProps {
  price: string;
  category: string;
  shipping: string;
  store: string;
  date: Date;
  username: string;
  viewsCount: number;
  repliesCount: number;
  productURL: string;
  imageLinks: string[] | undefined;
  body: string;
}

const Contents: React.FunctionComponent<ContentsProps> = ({
  price,
  category,
  shipping,
  store,
  date,
  username,
  viewsCount,
  repliesCount,
  productURL,
  imageLinks,
  body,
}) => {
  const postDate = dayjs(date).format("YYYY-MM-DD HH:mm");
  const mobileDate = dayjs().to(dayjs(date));
  return (
    <>
      <PriceAndCategoryContainer>
        <Price>{price}</Price>
        <Category>{category}</Category>
      </PriceAndCategoryContainer>

      <InformationContainer>
        <Count className="no-padding-left">
          <Feature>
            배송비: <LightWeight>{shipping}</LightWeight>
          </Feature>
          <StoreName>
            쇼핑몰: <LightWeight>{store}</LightWeight>
          </StoreName>
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
            <CountNumber>{viewsCount}</CountNumber>
          </Count>
          <InformationMidDot>&#183;</InformationMidDot>
          <Count>
            <BiCommentDetail />
            <CountNumber>{repliesCount}</CountNumber>
          </Count>
        </FlexContainer>
      </InformationContainer>

      <div>
        <UrlBox>
          URL:&nbsp;
          <Link href={productURL}>
            <a target="_blank">{productURL}</a>
          </Link>
        </UrlBox>
      </div>

      {imageLinks && imageLinks.length != 0 ? (
        <StyledCarousel imageLinks={imageLinks} />
      ) : null}

      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
};

export default Contents;
