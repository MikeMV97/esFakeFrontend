import { useRouter } from "next/router";
import { StyledForm } from "./styles.js";

export const AnalysisForm = () => {
  const router = useRouter();

  const handleSubmitToResults = (e) => {
    e.preventDefault();
    router.push("/report");
  };

  return (
    <StyledForm action="submit" onSubmit={handleSubmitToResults}>
      <label htmlFor="title">
        <span>Título de la noticia</span>
        <input className="text" type="text" id="title" />
      </label>
      <label htmlFor="link">
        <span>Enlace de la noticia</span>
        <input className="text" type="text" id="link" />
      </label>
      <label htmlFor="content">
        <span>Cuerpo de la noticia</span>
        <textarea name="content" id="content" />
      </label>
      <input className="submit" type="submit" value="Analizar" />
    </StyledForm>
  );
};
