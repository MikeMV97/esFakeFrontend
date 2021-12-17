import { StyledForm } from "./styles";
import { InputText } from "../InputText";
import { useState } from "react";
import { ProfileAvatar } from "../../styles/ProfileAvatar/ProfileAvatar";
import { InputFile } from "../InputFile";
import { Button } from "../../styles/Button/Button";
import { useForm } from "../../hooks/useForm";
import { validatePassword } from "../../utils/validatePassword";
import { UploadContainer } from "../../styles/UploadContainer/UploadContainer";


export const SignupForm = () => {
  const INITIAL_IMAGE_STATE = { src: null, value: null }

  const [image, setImage] = useState(INITIAL_IMAGE_STATE)

  const { form, handleChange, cleanValues } = useForm({ email: '', password: '', passwordRepeat: '' })

  const handleChangeImage = (event) => {
    const [file] = event.target.files
    if (file) {
      const fileURL = URL.createObjectURL(file)
      setImage({ ...file, src: fileURL })
    } else {
      setImage(INITIAL_IMAGE_STATE)
    }
  }

  return (
    <StyledForm onSubmit={(event) => {
      event.preventDefault()
      validatePassword(form.password, form.passwordRepeat, cleanValues)
    }}>
      <UploadContainer>
        {image.src && <ProfileAvatar src={image.src} alt="" />}
        {!image.src && <InputFile
          name="profileAvatar"
          label="Selecciona una foto de perfil"
          accept="image/png, image/jpeg"
          onChange={handleChangeImage}
        />}
      </UploadContainer>
      {image.src && <Button onClick={(event) => {
        event.preventDefault()
        setImage(INITIAL_IMAGE_STATE)
      }}>Eliminar imagen</Button>}
      <InputText
        name="email"
        type="email"
        label="Correo electrónico"
        icon="las la-user-circle"
        placeholder="youremail@awesome.com"
        value={form.email}
        onChange={handleChange}
        isRequired
      />
      <InputText
        name="password"
        type="password"
        label="Contraseña"
        icon="las la-lock"
        value={form.password}
        onChange={handleChange}
        isRequired
      />
      <InputText
        name="passwordRepeat"
        type="password"
        label="Repetir contraseña"
        icon="las la-lock"
        value={form.passwordRepeat}
        onChange={handleChange}
        isRequired
      />
      <input type="submit" className="submit" value="Crear cuenta" />
    </StyledForm>
  );
};
