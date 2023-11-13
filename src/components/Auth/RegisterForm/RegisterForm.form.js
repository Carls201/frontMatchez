import * as Yup from "yup";

export function initialValues() {
    return {
        nick: "",
        correo: "",
        password: "",
        id_rol: 1,
    }
}

export function validationSchema() {
    return Yup.object({
        nick: Yup.string().required(true),
        correo: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
        id_rol: Yup.number().required(true)
    })
}