import React, { ReactElement } from "react";
import Link from "next/link";
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from "next/router";
import {
  CardLi,
  ThumbnailContainer,
  CardImageBox,
  CardImageA,
  CardImage,
  CardDescription,
  CardTitleA,
  PriceContainer,
  CardPrice,
  CardStore,
  CardCategory,
  CardShipping,
  PriceShippingBox,
  CardUserInfo,
  CardLikeCount,
  CardRepliesCount,
  CardViewsCount,
  CardCategoryA,
} from "./card.styled";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaUser } from "react-icons/fa";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface CardProps {
  category: string;
  id: string;
  title: string;
  imageLinks: string[];
  price: string;
  shipping: string;
  store: string;
  username: string;
  likeCount: number;
  repliesCount: number;
  date: Date;
  viewsCount: number;
}

function Card({
  category,
  id,
  title,
  imageLinks,
  price,
  shipping,
  store,
  username,
  date,
  viewsCount,
  likeCount,
  repliesCount,
}: CardProps): ReactElement {
  const router = useRouter();
  const minimalizeDate = dayjs().to(dayjs(date));

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/post/${id}`);
  };

  return (
    <CardLi>
      <ThumbnailContainer onClick={() => handleClick}>
        <CardImageBox>
          <Link href={`/post/${id}`} passHref>
            <CardImageA>
              {imageLinks.length < 1 ? (
                <CardImage
                  src="/default.png"
                  alt={title}
                  width="120"
                  height="90"
                />
              ) : (
                <CardImage
                  src={imageLinks[0] + "?w=120&h=90&f=webp&q=90"}
                  priority={true}
                  alt={title}
                  width={120}
                  height={90}
                />
              )}
            </CardImageA>
          </Link>
        </CardImageBox>
        <CardDescription>
          <div>
            <CardStore>{store}</CardStore>
            <CardCategory>
              <Link
                href={{
                  pathname: "category",
                  query: { value: category },
                }}
                passHref
              >
                <CardCategoryA>{category}</CardCategoryA>
              </Link>
            </CardCategory>
          </div>
          <div>
            <Link href={`/post/${id}`} passHref>
              <CardTitleA>
                {title} <CardRepliesCount>[{repliesCount}]</CardRepliesCount>
              </CardTitleA>
            </Link>
          </div>
          <PriceContainer>
            <PriceShippingBox>
              <CardPrice>
                {price}
                &nbsp;
              </CardPrice>
              <CardShipping>
                <MdLocalShipping />
                {shipping} |
              </CardShipping>
              <CardLikeCount>
                <span>추천 {likeCount}</span>
              </CardLikeCount>
            </PriceShippingBox>
            <PriceShippingBox>
              <CardUserInfo>
                <FaUser />
                {username} | {minimalizeDate}{" "}
                <CardViewsCount>| 조회 {viewsCount}</CardViewsCount>
              </CardUserInfo>
            </PriceShippingBox>
          </PriceContainer>
        </CardDescription>
      </ThumbnailContainer>
    </CardLi>
  );
}

export default React.memo(Card);
