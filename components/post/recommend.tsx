import { FlexBox } from 'components/styled/flexbox';
import * as React from 'react';
import styled from 'styled-components';
import { MdThumbUp, MdThumbUpOffAlt } from "react-icons/md";

interface IRecommendProps {
  likeCount: any;
}

const Recommend: React.FunctionComponent<IRecommendProps> = ({ likeCount }) => {
  const handleClick = (e: any) => {
    e.preventDefault();

  }

  return <FlexBoxColumn>
    <RcButton onClick={handleClick}>
    <RcIcon><MdThumbUpOffAlt /></RcIcon>
    <RcLikeCount>{likeCount}</RcLikeCount>
    </RcButton>
  </FlexBoxColumn>;
};

export default Recommend;

const FlexBoxColumn = styled(FlexBox)`    
    margin-top: 5rem;
`;

const RcButton = styled.button`
  color: ${props => props.theme.white};
  background: transparent;
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.theme.black};
  border-radius: 0.6rem;
  min-width: 50px;
  cursor: pointer;
`;

const RcIcon = styled.div`
  font-size: 1.7rem;
`;

const RcLikeCount = styled.div`  
  font-size: 1.4rem;
`;