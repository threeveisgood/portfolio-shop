import styled from "styled-components";

export const PictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`

export const PictureThumbnail = styled.div`
  margin: 1.5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phoneLg}) {
    margin: 1rem;
  }
`