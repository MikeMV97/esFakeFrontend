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

export const InfoContainer = styled.div`
  grid-area: graph;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;

  .favorite-button{ 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h2,h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 1.2rem;
  }

  li {
    font-size: 1.2rem;
  }

  b {
    font-weight: 900;
    font-size: 1.3rem;
  }
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: flex-end;
`;
