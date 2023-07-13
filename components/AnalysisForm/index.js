import { StyledForm } from "./styles.js";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoadingComponent } from "../LoadingComponent/index.js";
import { readCookie } from "../../utils/cookies.js";


export const AnalysisForm = () => {
  const router = useRouter()
  const { form, handleChange } = useForm({
    title: '',
    url: '',
    articleText: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmitToResults = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { email } = readCookie('user')
    const token = readCookie('token');
    console.log({ token });
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/analysis/predict`, { ...form, email }, { headers })
    setLoading(false)
    router.push({
      pathname: '/report',
      query: {
        title: form.title,
        id: data.id
      }
    })
  };

  if (loading) return <LoadingComponent message="En unos segundos tendremos tus resultados listos" />

  return (
    <StyledForm action="submit" onSubmit={handleSubmitToResults}>
      <label htmlFor="title">
        <span>Título de la noticia</span>
        <input className="text" name="title" type="text" id="title" onChange={handleChange} required />
      </label>
      <label htmlFor="url">
        <span>Enlace de la noticia</span>
        <input className="text" name="url" type="text" id="url" onChange={handleChange} required />
      </label>
      <label htmlFor="articleText">
        <span>Cuerpo de la noticia</span>
        <textarea name="articleText" id="articleText" onChange={handleChange} required />
      </label>
      <input className="submit" type="submit" value="Analizar" />
    </StyledForm>
  );
};
