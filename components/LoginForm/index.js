import { StyledForm } from "./styles";
import { InputText } from "../InputText";

export default function LoginForm() {
  return (
    <StyledForm action="">
      <InputText
        name="email"
        type="email"
        label="Correo electrónico"
        icon="las la-user-circle"
        placeholder="youremail@awesome.com"
      />
      <InputText
        name="password"
        type="password"
        label="Contraseña"
        icon="las la-lock"
      />
      <a className="recover-password">
        <span>¿Se te olvido tu contraseña?</span>
      </a>

      <input type="submit" className="submit" value="Iniciar sesión" />
    </StyledForm>
  );
}
