import { StyledForm } from "./styles";
import { useRouter } from "next/router";
// import {useRef} from 'react';
import { Button } from "../../styles/Button/Button";
import Link from "next/link";
import { InputText } from "../InputText";
import { useForm } from "../../hooks/useForm";
import { createCookie } from "../../utils/cookies";
import axios from "axios";

export default function LoginForm() {
	const router = useRouter();
	const { form, handleChange } = useForm({ email: '', password: '' })
	// const refPswd = useRef(null);

	const signInUser = async (email, password) => {
		const urlSignIn = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth/sign-in`
		try {
			const apiKeyToken = encodeURI(process.env.NEXT_PUBLIC_API_KEY)
			const { data: loggedUser } = await axios({
				url: urlSignIn,
				method: 'POST',
				data: {
					apiKeyToken
				},
				auth: {
					username: email,
					password
				}
			});
			const { token, user } = loggedUser;
			if (!token || !user) {
				throw new Error('Error al iniciar sesión')
			}
			createCookie('token', token);
			createCookie('user', user);
			router.push('/analysis');
		} catch (error) {
			console.log(error);
			alert('No fue posible iniciar sesión. Credenciales incorrectas');
		}
	}

	return (
		<StyledForm onSubmit={(event) => {
			event.preventDefault()
			// console.log(form)
			if (form.email && form.password) {
				signInUser(form.email, form.password);
			}
		}}>
			<InputText
				name="email"
				type="email"
				label="Correo electrónico"
				icon="las la-user-circle"
				placeholder="tu.email@awesome.com"
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
			{/* ref={refPswd} */}
			{/* <a className="recover-password">
				<span>¿Se te olvido tu contraseña?</span>
			</a> */}
			
			<input type="submit" className="submit" value="Iniciar sesión" />
			<hr />
			<p className="or">ó</p>
			<span>¿No tienes cuenta?</span>
			<Link href="/signup">
			<a>
				<Button secondary>Registrarte</Button>
			</a>
			</Link>
		</StyledForm>
	);
}
