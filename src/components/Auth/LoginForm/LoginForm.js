import { View, Text, TouchableOpacity } from "react-native";
import { Input, Backdrop, Button } from "native-base"
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { initailValues, validationSchema } from "./LoginForm.form"
import { useAuth } from "../../../hooks";
import { styles } from "./LoginForm.styles";

const authController = new Auth();

export function LoginForm() {

    const {login} = useAuth()

    const formik = useFormik({
        initialValues: initailValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authController.login(formValue.correo, formValue.password)
                const {access, refresh} = response; 

                await authController.setAccessToken(access)
                await authController.setRefreshToken(refresh)

                await login(access)
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <View style={styles.content}>
            <View style={styles.viewInput}>
                <Input
                    placeholder="Correo electrónico"
                    variant="unstyled"
                    autoCapitalize="none"
                    value={formik.values.correo}
                    onChangeText={(text) => formik.setFieldValue("correo", text)}
                    style={[styles.input, formik.errors.correo && styles.inputError]}
                />
            </View>

            <Input
                placeholder="Contraseña"
                variant="unstyled"
                secureTextEntry
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                style={[styles.input, formik.errors.password && styles.inputError]}
            />
            
            <TouchableOpacity onPress={formik.handleSubmit} isLoading={formik.isSubmitting} style={styles.btn}>
                <Text style={styles.textBtn}>Ingresar</Text>
            </TouchableOpacity>
            {/* <Button onPress={formik.handleSubmit} isLoading={formik.isSubmitting} style={styles.btn}>Ingresar</Button> */}
        </View>
    )
}