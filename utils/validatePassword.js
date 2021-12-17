import { notifyError } from './notify'

export const validatePassword = (password, passwordRepeat, cleanValues) => {
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[0-9a-zA-Z]{8,}$/

    if (password !== passwordRepeat) {
        cleanValues()
        notifyError('Las contraseñas no son iguales.')
        return null
    }

    if (!passRegex.test(password)) {
        cleanValues()
        notifyError('Las contraseña debe contener al menos un digito, un caracter especial (!@#$%^&*) y 10 caracteres de longitud.')
        return null
    }
}