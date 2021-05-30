import { AuthMessage, AuthWrapper, FormWrapper } from "../styles/AuthStyles";
import LoginForm from "../components/LoginForm";


const Login = () => {
  return (
    <AuthWrapper>
      <AuthMessage>
        <p className="message">
          “Las noticias tratan de cosas que ocurren, nunca de las que no
          ocurren”
        </p>
        <p className="author">Steven Pinker</p>
      </AuthMessage>
      <FormWrapper>
        <h1>Inicia sesión</h1>
        <h2>¡Que gusto verte de nuevo!</h2>
        <LoginForm />
      </FormWrapper>
    </AuthWrapper>
  );
};

export default Login;
