import * as React from 'react';
import styled from "styled-components";

interface IContentsProps {
}

const Contents: React.FunctionComponent<IContentsProps> = (props) => {
  return <ContentsContianer>
    <ContentsLayout>
    <TitleContainer>
      <Title>Lenovo ThinkBook 13s Gen 3 Laptop: Ryzen 5 5600U, 13.3" IPS, 16GB RAM, 512GB SSD</Title>
    </TitleContainer>

    <DetailContainer>
     <DetailContents>
       <Price>690,000원</Price>
       <Feature>배송비: 무료배송</Feature>
       <StoreName>쇼핑몰: G마켓</StoreName>
     </DetailContents>
    </DetailContainer>
    </ContentsLayout>
  </ContentsContianer>;
};

export default Contents;

const ContentsContianer = styled.div`
  width: 120rem;
  background: #fff;    
  margin: 0 auto;  
  box-sizing: border-box;
`

const ContentsLayout = styled.div`
  border-radius: 0.4rem;
  border: 1px solid #d6d6d6;
  margin: 1rem 0 0;
  border-top: 6px solid #000;  
`

const TitleContainer = styled.div`
  padding: 3rem 2.4rem 0;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 400;
`

const DetailContainer = styled.div`
  padding: 2.5rem 2.4rem;
`

const DetailContents = styled.div`
  overflow: hidden;
`

const Price = styled.span`
  font-size: 2rem;
`

const Feature = styled.span`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  color: #3b3838;
`
const StoreName = styled.span`
  font-size: 1.3rem;
  margin-left: 1.5rem;
  color: #3b3838;
`
