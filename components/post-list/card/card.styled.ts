import Image from "next/image";
import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  box-shadow: none;
  padding: 1.2rem;
  width: 18rem;
  justify-content: center;

  ${({ theme }) => theme.media.phoneLg} {
    width: 100%;
    padding: 0 2rem;

    &:not(:first-child) {
      margin-top: 3rem;
      justify-content: center;
    }
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.phoneLg} {
    flex-direction: row;
  }
`;

export const CardImageBox = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.media.phoneLg} {
    display: flex;
    align-items: center;
  }
`;

export const CardImageA = styled.a`
  display: flex;
  max-width: 16rem;
  max-height: 16rem;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;

  ${({ theme }) => theme.media.phoneLg} {
    width: 12rem;
    height: 12rem;
  }
`;

export const CardImage = styled(Image)`
  border-radius: 1rem;
  width: 120px;
  height: 90px;
`;

export const CardDescription = styled.div`
  ${({ theme }) => theme.media.phoneLg} {
    padding-left: 1.7rem;
  }
`;

export const CardTitleA = styled.a`
  color: ${(props) => props.theme.black};
  min-height: 3.5rem;
  line-height: 1.9rem;
  font-size: 1.5rem;
  margin: 1rem auto;
  padding-top: 1.5rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.media.phoneLg} {
    min-height: auto;
    margin: 0 0 1rem 0;
    width: 18rem;
  }
`;
export const PriceContainer = styled.span`
  padding-top: 0.5rem;
`;

export const CardPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  overflow: hidden;
  color: ${(props) => props.theme.priceColor};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NoteContainer = styled.span`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

export const CardNote = styled.div`
  padding-top: 0.3rem;
  color: ${(props) => props.theme.black};
  font-size: 1.15rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: auto;
  font-weight: bold;

  ${({ theme }) => theme.media.phoneLg} {
    padding-top: 0.2rem;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  margin-top: 1.2rem;
  color: ${(props) => props.theme.primary};
`;

export const CardFooterIcon = styled.span`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;
