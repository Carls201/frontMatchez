import * as Yup from "yup";

export function initialValues() {
    return {
        nombre: '',
        fecha_nac: null,
        altura: '',
        peso: '',
        sexo: '',
        foto: null
    };
}

export function validationSchema() {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    return Yup.object({
        nombre: Yup.string().required(true),
        fecha_nac: Yup.string().matches(dateFormat, 'Formato de fecha inválido').required('La fecha de nacimiento es requerida'),
        altura: Yup.string().required(true),
        peso: Yup.string().required(true),
        sexo: Yup.string().required(true)
    })
}