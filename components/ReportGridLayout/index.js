import {
  StyledReportGrid,
  TitleContainer,
  IlustrationContainer,
  InfoContainer,
  ButtonContainer,
} from "./styles";

import { Button } from "../../styles/Button/Button";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";


export const ReportGridLayout = (props) => {
  return (
    <StyledReportGrid>
      <TitleContainer>
        <h1>Aquí está tu reporte</h1>
      </TitleContainer>
      <IlustrationContainer>
        <img src="/results.png" alt="Dibujo de mujer con un reporte" />
      </IlustrationContainer>
      <InfoContainer>
        <FavoriteButton id={props.data.id} item={{ title: props.title, ...props.data }} />
        <h2>De tu noticia <b>&quot;{props.title}&quot;</b> obtuvimos:</h2>
        <ul>
          <li>
            Longitud promedio de letras por palabra: {" "}
            <b>{Math.floor(props.data.avgWordLen)}</b>
          </li>
          <li>
            Número de palabras usadas: {" "}
            <b>{props.data.numWords}</b>
          </li>
          <li>
            Número de palabras diferentes: {" "}
            <b>{props.data.numDiffWords}</b>
          </li>
          <li>
            Número de palabras con alta información semántica: {" "}
            <b>{props.data.numStopwords}</b>
          </li>
        </ul>
        <h3>Dada esta información tu noticia se considera posiblemente* {" "}
          <br />
          <b>{props.data.predictionResult ? "verdadera ✅" : "falsa ❌"}</b>
        </h3>

        <p>*Recuerda que estos resultados tienen aproximadamente un 81% de confiabilidad.</p>
      </InfoContainer>
      <ButtonContainer>
        <Link href="/analysis">
          <Button secondary>Regresar</Button>
        </Link>
      </ButtonContainer>
    </StyledReportGrid>
  );
};
