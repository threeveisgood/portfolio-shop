import React, { ReactElement } from "react";
import Link from "next/link";
import styled from 'styled-components'

export default function Card(): ReactElement {  
  return (
    <CardLi>       
       <ThumbnailContainer>
        <Link href="/" passHref><CardImageA><CardImage src="11118565.png" /></CardImageA></Link>
        <Link href="/" passHref><CardTitleA>MECO Cordless Air Duster Computer Keyboard Cleaner Blower Electric for Computer 45000RPM Replaces Compressed Air Cans $37.99...</CardTitleA></Link>
       </ThumbnailContainer>
    </CardLi>
  );
}

const CardLi = styled.li`  
  display: flex;
  //flex-direction: column;
  border: 1px solid black;
  //min-width: 19rem;  
  padding: 1.2rem;  
  width: 18rem;  
`

const ThumbnailContainer = styled.div`
  display: flex;  
  flex-direction: column;
`

const CardImageA = styled.a`
  max-width: 18rem;
  max-height: 18rem;  
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;
` 

const CardImage = styled.img`
    width: 18rem;
    height: 18rem;
`

const CardTitleA = styled.a`
  //max-height: 4.5rem;
  line-height: 1.5rem;
  font-size: 1.4rem;  
  overflow: hidden;
  margin-top: 2rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

// 한줄 당 글 개수 7개, 