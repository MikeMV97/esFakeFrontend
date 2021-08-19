import {
  StyledReportGrid,
  TitleContainer,
  IlustrationContainer,
  GraphContainer,
  ButtonContainer,
} from "./styles";

import { Button } from "../../styles/Button/Button";
import { PlotContainer } from "../PlotContainer";

export const ReportGridLayout = () => {
  
  const mockedFeatures = [{
    name: 'Exactitud',
    value: 100,
  },
  {
    name: 'Libertad',
    value: 40,
  },
  {
    name: 'Presicion',
    value: 80,
  }]

  return (
    <StyledReportGrid>
      <TitleContainer>
        <h1>Aquí está tu reporte</h1>
      </TitleContainer>
      <IlustrationContainer>
        <img src="/results.png" alt="Dibujo de mujer con un reporte" />
      </IlustrationContainer>
      <GraphContainer>
        <h2>[Título de la noticia]</h2>
        <p>
          <b>[enlace de la noticia]</b>
        </p>
        <PlotContainer features={mockedFeatures} />
      </GraphContainer>
      <ButtonContainer>
        <Button secondary>Regresar</Button>
      </ButtonContainer>
    </StyledReportGrid>
  );
};
