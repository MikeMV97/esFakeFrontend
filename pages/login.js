import styled from "styled-components";
import { AuthMessage } from "../styles/AuthMessage/AuthMessage";
import LoginForm from "../components/LoginForm";


const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Login = () => {
  return (
    <LoginWrapper>
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
    </LoginWrapper>
  );
};

export default Login;
