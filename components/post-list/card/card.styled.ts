import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  box-shadow: none;
  padding: 1.2rem;
  width: 100%;

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
  flex: 1 1 0;
  align-items: center;
`;

export const CardImageBox = styled.div`
  ${({ theme }) => theme.media.phoneLg} {
    width: 80px;
    height: 60px;
  }
`;

export const CardImageA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  gap: 3rem 0;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 1rem;
`;

export const CardDescription = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  padding-left: 2rem;

  ${({ theme }) => theme.media.phoneLg} {
    padding-left: 1rem;
  }
`;

export const CardTitleA = styled.a`
  color: ${(props) => props.theme.black};
  min-height: 3.5rem;
  line-height: 1.9rem;
  font-size: 1.6rem;
  padding-top: 1rem;
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1.3rem;
    min-height: 1.5rem;
  }
`;

export const CardRepliesCount = styled.span`
  font-size: 1.4rem;

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1.1rem;
  }
`;

export const PriceContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.phoneLg} {
    justify-content: normal;
  }
`;

export const PriceShippingBox = styled.div`
  display: flex;
`;

export const CardPrice = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  overflow: hidden;
  color: ${(props) => props.theme.priceColor};
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
  }
`;

export const CardShipping = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.lowgray};

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
  }
`;

export const CardLikeCount = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 0.7rem;
  gap: 0.3rem;
  color: ${(props) => props.theme.gray};

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;

export const CardUserInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.lowgray};

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
  }
`;

export const CardStore = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  padding: 0.5rem 0.9rem;
  border-radius: 0.6rem;

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
  }
`;

export const CardCategory = styled.span`
  font-size: 1.4rem;
  padding-left: 0.8rem;
  color: ${(props) => props.theme.gold};

  ${({ theme }) => theme.media.phoneLg} {
    font-size: 1rem;
  }
`;

export const CardCategoryA = styled.a`
  color: ${(props) => props.theme.gold};
`;

export const CardViewsCount = styled.span`
  ${({ theme }) => theme.media.phoneLg} {
    display: none;
  }
`;
