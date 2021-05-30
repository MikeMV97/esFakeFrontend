import { AuthMessage, AuthWrapper, FormWrapper } from "../styles/AuthStyles";
import { SignupForm } from "../components/SignupForm";

const Login = () => {
  return (
    <AuthWrapper>
      <AuthMessage>
        <p className="message">
          “No subestimes nunca la capacidad de difusión de una noticia, aún de
          la más pequeña”
        </p>
        <p className="author">Morris West</p>
      </AuthMessage>
      <FormWrapper>
        <h1>Regístrate</h1>
        <h2>Accede a un anális de noticias completamente gratis</h2>
        <SignupForm />
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Login;
