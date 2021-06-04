import { StyledForm } from "./styles";
import { InputText } from "../InputText";

export const SignupForm = () => {
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
      <InputText
        name="password"
        type="password"
        label="Repetir contraseña"
        icon="las la-lock"
      />

      <input type="submit" className="submit" value="Iniciar sesión" />
    </StyledForm>
  );
};
