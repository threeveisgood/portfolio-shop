import styled from "styled-components";
import { FlexBox } from "components/common/flexbox";

export const FlexBoxColumn = styled(FlexBox)`
  margin-top: 5rem;
  padding-bottom: 2.2rem;
`;

export const RcButton = styled.button`
  color: ${(props) => props.theme.white};
  background: transparent;
  padding: 0.1rem 0rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) => props.theme.black};
  min-width: 38px;
  cursor: pointer;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    min-width: 32px;
  }
`;

export const RcIcon = styled.div`
  font-size: 1.6rem;
  padding-top: 0.3rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1.4rem;
  }
`;

export const RcLikeCount = styled.div`
  font-size: 1.2rem;
  padding-top: 0.5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    font-size: 1rem;
  }
`;
