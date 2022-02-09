import React, { ReactElement } from "react";
import Link from "next/link";
import styled from "styled-components";
import { MdComment, MdThumbUp } from 'react-icons/md'

export default function Card(): ReactElement {
  return (
    <CardLi>
      <ThumbnailContainer>
        <Link href="/" passHref>
          <CardImageA>
            <CardImage src="11118565.png" />
          </CardImageA>
        </Link>
        <Link href="/" passHref>
          <CardTitleA>
            MECO Cordless Air Duster Computer Keyboard Cleaner Blower Electric
            for Computer 45000RPM Replaces Compressed Air Cans $37.99...
          </CardTitleA>
        </Link>
        <PriceContainer>
          <CardPrice>
            5,900,000<CardBill>원</CardBill>&nbsp;
          </CardPrice>          
        </PriceContainer>
        <NoteContainer>
          <CardNote>배송비 2500원</CardNote>
          <CardNote>옥션</CardNote>
        </NoteContainer>
        <CardNote>파운더: 아두</CardNote>
        <CardFooter>
          <CardFooterIcon>
            <MdThumbUp /> &nbsp;0
          </CardFooterIcon>
          <CardFooterIcon>
            <MdComment />&nbsp;0
          </CardFooterIcon>
        </CardFooter>
      </ThumbnailContainer>
    </CardLi>
  );
}

const CardLi = styled.li`
  display: flex;  
  border: 1px solid lightgray;
  box-shadow: none;
  padding: 1.2rem;
  width: 18rem;
  border-radius: 0.8rem;
  background: #fff;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImageA = styled.a`
  max-width: 18rem;
  max-height: 18rem;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;
`;

const CardImage = styled.img`
  width: 18rem;
  height: 18rem;
`;

const CardTitleA = styled.a`
  min-height: 4.5rem;
  line-height: 1.5rem;
  font-size: 1.4rem;
  overflow: hidden;
  margin-top: 1.3rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const PriceContainer = styled.span`
  margin-top: 0.6rem;
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
  margin-top: 0.3rem;
  justify-content: space-between;
`;

const CardNote = styled.div`
  color: #2e2828;
  font-size: 1.1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardFooter = styled.footer`
  display: flex;
  margin-top: 0.7rem;
`;

const CardFooterIcon = styled.span`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
