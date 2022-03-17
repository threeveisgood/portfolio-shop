import styled from "styled-components";
import { SubmitButton } from "components/styled/comment";
import { VscComment } from "react-icons/vsc";
import { BsReplyFill } from "react-icons/bs";

export const CtCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`;

export const CtInfo = styled.div` 
  display: flex;
  margin-bottom: 1.1rem;
`;

export const CtUsername = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${(props) => props.theme.black};
`;

export const CtDate = styled.span`
  margin-left: 0.7rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.gray};
`;

export const CtContents = styled.span``;

export const CtDot = styled.span`
  font-size: 1.4rem;
  margin-right: 0.7rem;
`;

export const CtSub = styled.div`
  display: flex;
  margin-top: 0.6rem;
`;

export const CtVoteButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 2rem;

  &.up-vote {
    color: ${(props) => props.theme.gold};
  }

  &.down-vote {
    color: #909191;
    opacity: 0.8;
  }
`;

export const CtVoteCount = styled.span`
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
`;

export const CtReplyButton = styled(SubmitButton)`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  background: transparent;
  color: ${(props) => props.theme.gray};
  padding: 1rem 0.8rem;
  margin-left: 0.2rem;
`;

export const CtReplyIcon = styled(VscComment)`
  font-size: 1.5rem;
`;

export const CtReply = styled.div``;

export const CtReplyTailIcon = styled(BsReplyFill)`
  transform: rotate( 180deg );
  font-size: 1.7rem;
`
