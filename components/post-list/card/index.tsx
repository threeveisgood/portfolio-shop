import React, { ReactElement } from "react";
import Link from "next/link";
import { MdComment, MdThumbUp } from "react-icons/md";
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
  NoteContainer,
  CardNote,
  CardFooter,
  CardFooterIcon,
} from "./card.styled";

interface CardProps {
  id: string;
  title: string;
  imageLinks: string[];
  price: string;
  shipping: string;
  store: string;
  username: string;
  likeCount: number;
  repliesCount: number;
}

function Card({
  id,
  title,
  imageLinks,
  price,
  shipping,
  store,
  username,
  likeCount,
  repliesCount,
}: CardProps): ReactElement {
  const router = useRouter();

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
                <CardImage src="/default.png" alt={title} />
              ) : (
                <CardImage
                  src={imageLinks[0] + "?w=120&h=90&f=webp&q=90"}
                  alt={title}
                />
              )}
            </CardImageA>
          </Link>
        </CardImageBox>
        <CardDescription>
          <div>
            <Link href={`/post/${id}`} passHref>
              <CardTitleA>{title}</CardTitleA>
            </Link>
          </div>
          <PriceContainer>
            <CardPrice>
              {price}
              &nbsp;
            </CardPrice>
          </PriceContainer>
          <NoteContainer>
            <CardNote>배송비: {shipping}</CardNote>
            <CardNote>{store}</CardNote>
          </NoteContainer>
          <CardNote>파운더: {username}</CardNote>
          <CardFooter>
            <CardFooterIcon>
              <MdThumbUp /> &nbsp;{likeCount}
            </CardFooterIcon>
            <CardFooterIcon>
              <MdComment />
              &nbsp;{repliesCount}
            </CardFooterIcon>
          </CardFooter>
        </CardDescription>
      </ThumbnailContainer>
    </CardLi>
  );
}

export default React.memo(Card);
