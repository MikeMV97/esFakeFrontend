import styled from "styled-components";

export const StyledReportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "ilustration graph"
    "button button";
  column-gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  justify-content: flex-end;
  h1 {
      font-size: 64px;
  }
`;

export const IlustrationContainer = styled.div`
  grid-area: ilustration;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 600px;
    min-width: 280px;
  }
`;

export const GraphContainer = styled.div`
  grid-area: graph;
  
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: flex-end;
`;
