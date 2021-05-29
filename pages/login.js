import styled from "styled-components";
import { AuthMessage } from "../styles/AuthMessage/AuthMessage";

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
`;

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
    </LoginWrapper>
  );
};

export default Login;
