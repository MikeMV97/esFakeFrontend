import { StyledForm } from "./styles.js";


export const AnalysisForm = () => {
  return (
    <StyledForm action="">
      <label htmlFor="title">
        <span>Título de la noticia</span>
        <input className="text" type="text" id="title" />
      </label>
      <label htmlFor="link">
        <span>Enlace de la noticia</span>
        <input className="text" type="text" id="link"/>
      </label>
      <label htmlFor="content">
        <span>Cuerpo de la noticia</span>
        <textarea name="content" id="content"/>
      </label>
      <input className="submit" type="submit" value="Analizar" />
    </StyledForm>
  );
};
