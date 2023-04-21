import styled from "styled-components";

export const ThumbnailUl = styled.ul`
  margin-top: 4rem;
`;

export const ThumbnailLi = styled.li`
  display: inline-block;
  margin-right: 0.8rem;

  &:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const PrimaryP = styled.p`
  ${(props) => props.theme.black};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ThumbnailDiv = styled.div`
  position: relative;
  display: inline-block;
`;

export const DeleteImageButton = styled.button`
  display: flex;
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.darkred};
  font-size: 2.6rem;
`;
