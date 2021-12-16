import { StyledForm } from "./styles";
import { InputText } from "../InputText";
import { useForm } from "../../hooks/useForm";

export default function LoginForm() {

  const { form, handleChange } = useForm({ email: '', password: '' })

  return (
    <StyledForm action="">
      <InputText
        name="email"
        type="email"
        label="Correo electrónico"
        icon="las la-user-circle"
        placeholder="youremail@awesome.com"
        value={form.email}
        onChange={handleChange}
      />
      <InputText
        name="password"
        type="password"
        label="Contraseña"
        icon="las la-lock"
        value={form.password}
        onChange={handleChange}
      />
      <a className="recover-password">
        <span>¿Se te olvido tu contraseña?</span>
      </a>
      <input type="submit" className="submit" value="Iniciar sesión" />
    </StyledForm>
  );
}
