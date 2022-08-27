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

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/post/${id}`);
  };

  return (
    <CardLi>
      <ThumbnailContainer onClick={handleClick}>
        <CardImageBox>
          <Link href={`/post/${id}`} passHref>
            <CardImageA>
              {imageLinks.length < 1 ? (
                <CardImage src="/default.png" alt={title} />
              ) : (
                <CardImage src={imageLinks[0]} alt={title} />
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

const CardLi = styled.li`
  display: flex;
  box-shadow: none;
  padding: 1.2rem;
  width: 18rem;

  ${({ theme }) => theme.media.phoneLg} {
    width: 100%;
    padding: 0 2rem;

    &:not(:first-child) {
      margin-top: 4rem;
    }
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.phoneLg} {
    flex-direction: row;
  }
`;

const CardImageBox = styled.div`
  ${({ theme }) => theme.media.phoneLg} {
    display: flex;
    align-items: center;
  }
`;

const CardImageA = styled.a`
  max-width: 160px;
  max-height: 160px;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;

  ${({ theme }) => theme.media.phoneLg} {
    width: 120px;
    height: 120px;
  }
`;

const CardImage = styled.img`
  border-radius: 1rem;
  width: 160px;
  height: 160px;

  ${({ theme }) => theme.media.phoneLg} {
    width: 120px;
    height: 120px;
  }
`;

const CardDescription = styled.div`
  ${({ theme }) => theme.media.phoneLg} {
    padding-left: 1.7rem;
  }
`;

const CardTitleA = styled.a`
  color: ${(props) => props.theme.gray};
  font-weight: bold;
  min-height: 3.5rem;
  line-height: 1.8rem;
  font-size: 1.4rem;
  overflow: hidden;
  margin-top: 1.3rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.media.phoneLg} {
    min-height: auto;
    margin-bottom: 1rem;
    margin-top: 0;
    width: 180px;
  }
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

const NoteContainer = styled.span`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

const CardNote = styled.div`
  padding-top: 0.3rem;
  color: ${(props) => props.theme.black};
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: auto;

  ${({ theme }) => theme.media.phoneLg} {
    padding-top: 0.2rem;
  }
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
