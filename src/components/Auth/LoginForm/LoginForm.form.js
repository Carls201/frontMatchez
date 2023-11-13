import * as Yup from "yup"

export function initailValues() {
    return {
        correo: "",
        password: "",
    };
}

export function validationSchema() {
    return Yup.object({
        correo: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    })
}