import { useState } from 'react'

export const useForm = (formProperties) => {
    const [form, setForm] = useState(formProperties)

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const cleanValues = () => {
        setForm(formProperties)
    }
    
    return { form, handleChange, cleanValues }
}

