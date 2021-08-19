import {
  StyledReportGrid,
  TitleContainer,
  IlustrationContainer,
  GraphContainer,
  ButtonContainer,
} from "./styles";

import { Button } from "../../styles/Button/Button";

export const ReportGridLayout = () => (
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
      <div>Aquí va un gráfico muy bonico</div>
    </GraphContainer>
    <ButtonContainer>
      <Button secondary>Regresar</Button>
    </ButtonContainer>
  </StyledReportGrid>
);
