import { StyledForm } from "./styles";
import { InputText } from "../InputText";
import { useState } from "react";
import { ProfileAvatar } from "../../styles/ProfileAvatar/ProfileAvatar";
import { InputFile } from "../InputFile";
import { Button } from "../../styles/Button/Button";
import { useForm } from "../../hooks/useForm";
import { validatePassword } from "../../utils/validatePassword";
import { UploadContainer } from "../../styles/UploadContainer/UploadContainer";
import axios from "axios";


export const SignupForm = () => {

  const INITIAL_IMAGE_STATE = { src: null, file: null }

  const [image, setImage] = useState(INITIAL_IMAGE_STATE)

  const { form, handleChange, cleanValues } = useForm({ name: '', email: '', password: '', passwordRepeat: '' })


  const handleChangeImage = (event) => {
    const [file] = event.target.files
    if (file) {
      console.log(file)
      const fileURL = URL.createObjectURL(file)
      setImage({ file, src: fileURL })
    } else {
      setImage(INITIAL_IMAGE_STATE)
    }
  }

  const signUpUser = async (name, email, password, image) => {
    try {
      const urlSignUp = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth/sign-up`
      const urlSignIn = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth/sign-in`

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('profilePhoto', image.file)

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };

      const { data: user } = await axios.post(urlSignUp, formData, config)
      console.log(user)
      if (user) {
        const token = encodeURI(process.env.NEXT_PUBLIC_API_KEY)
        console.log("El token es: ", token)
        const { data } = await axios({
          url: urlSignIn,
          method: 'POST',
          data: {
            apiKeyToken: token
          },
          auth: {
            username: email,
            password
          }
        })
        console.log(data)
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledForm onSubmit={(event) => {
      event.preventDefault()
      if (validatePassword(form.password, form.passwordRepeat, cleanValues)) {
        signUpUser(form.name, form.email, form.password, image)
      }
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
        name="name"
        type="text"
        label="Nombre"
        icon="las la-user-circle"
        placeholder="Diana"
        value={form.name}
        onChange={handleChange}
        isRequired
      />
      <InputText
        name="email"
        type="email"
        label="Correo electrónico"
        icon="las la-envelope"
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
