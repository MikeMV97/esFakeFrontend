import { notifyError } from './notify'

export const validatePassword = (password, passwordRepeat, cleanValues) => {
    const passRegex = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if (password !== passwordRepeat) {
        cleanValues()
        notifyError('Las contraseñas no son iguales.')
        return false
    }

    if (!passRegex.test(password)) {
        cleanValues()
        notifyError('La contraseña debe contener al menos un digito, un caracter especial (!@#$%^&*) y 8 caracteres de longitud.')
        return false
    }

    return true;
}