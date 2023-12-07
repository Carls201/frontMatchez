import * as Yup from "yup";

export function initialValues() {
    return {
        id_lugarDeporte: '',
        nombre_sala: '',
        descripcion: '',
        fecha_encuentro: null,
        tope_sala: ''
    };
}

export function validationSchema() {
    return Yup.object({
        id_lugarDeporte: Yup.string().required(false),
        nombre_sala: Yup.string().required(false),
        descripcion: Yup.string().required(false),
        fecha_encuentro: Yup.string().required(false),
        tope_sala: Yup.string().required(false)
    })
}