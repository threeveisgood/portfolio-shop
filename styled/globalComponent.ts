import styled from "styled-components";

export const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

export const IconSvg = styled.svg`
  display: block;
  margin: 0 auto;
  max-width: 100%;

  &:not(:root) {
    overflow: hidden;
  }
`
export const GridScrollable = styled.div`
  overflow-x: auto;
  padding-bottom: 10px;  
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`