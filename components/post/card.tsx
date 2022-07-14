import React, { ReactElement } from "react";
import Link from "next/link";
import styled from "styled-components";
import { MdComment, MdThumbUp } from "react-icons/md";
import { useRouter } from "next/router";

interface CardProps {
  id: string;
  title: string;
  imageLinks: any;
  price: string;
  shipping: string;
  store: string;
  username: string;
  likeCount: any;
  repliesCount: any;
}

export default function Card({
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

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/post/${id}`);
  };

  return (
    <CardLi>
      <ThumbnailContainer onClick={handleClick}>
        <Link href={`/post/${id}`} passHref>
          <CardImageA>
            {imageLinks.length < 1 ? (
              <CardImage src="/default.png" alt={title} />
            ) : (
              <CardImage src={imageLinks[0]} alt={title} />
            )}
          </CardImageA>
        </Link>
        <Link href={`/post/${id}`} passHref>
          <CardTitleA>{title}</CardTitleA>
        </Link>
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
      </ThumbnailContainer>
    </CardLi>
  );
}

const CardLi = styled.li`
  display: flex;
  box-shadow: none;
  padding: 1.2rem;
  width: 18rem;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImageA = styled.a`
  max-width: 180px;
  max-height: 180px;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;
`;

const CardImage = styled.img`
  border-radius: 1rem;
  width: 180px;
  height: 180px;
`;

const CardTitleA = styled.a`
  color: ${(props) => props.theme.lowblack};
  min-height: 3.5rem;
  line-height: 1.5rem;
  font-size: 1.4rem;
  overflow: hidden;
  margin-top: 1.3rem;

  font-family: sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const PriceContainer = styled.span`
  padding-top: 0.5rem;
`;

const CardPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardOriginalPrice = styled.span`
  color: #da442a;
  font-size: 1.3rem;
  text-decoration: line-through;
`;

const CardBill = styled.span`
  font-size: 1.5rem;
`;

const NoteContainer = styled.span`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

const CardNote = styled.div`
  padding-top: 0.5rem;
  color: #2e2828;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardFooter = styled.footer`
  display: flex;
  margin-top: 1.2rem;
`;

const CardFooterIcon = styled.span`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

const CardWeightFont = styled.span`
  font-weight: 600;
`;
