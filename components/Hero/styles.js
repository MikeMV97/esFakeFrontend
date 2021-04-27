import styled from 'styled-components';

export const HeroGrid = styled.div`
  margin: 200px auto 0px;
  display: grid;
  max-width: 1180px;
  grid-template-columns: 500px 680px;
  column-gap: 80px;

  h1 {
      font-size: 80px;
  }

  p {
      font-size: 24px;
  }
`;

