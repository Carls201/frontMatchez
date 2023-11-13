import { View, Text } from "react-native"
import { Input, Button } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"
import { Auth } from "../../../api"
import { styles } from "./RegisterForm.styles"

const authController = new Auth();

export function RegisterForm() {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authController.register(formValue.nick, formValue.correo, formValue.password, formValue.id_rol)
                navigation.goBack();
            } catch (error) {
                console.log(error)
            }
        }
    }, )

    return (
        <View>
            <View style={styles.viewInput}>
                <Input
                    placeholder="Nombre de usuario"
                    variant="unstyled"
                    autoCapitalize="none"
                    value={formik.values.nick}
                    onChangeText={(text) => formik.setFieldValue("nick", text)}
                    style={[styles.input, formik.errors.nick && styles.inputError]}
                />
            </View>
            <Input
                placeholder="Correo electrónico"
                variant="unstyled"
                autoCapitalize="none"
                value={formik.values.correo}
                onChangeText={(text) => formik.setFieldValue("correo", text)}
                style={[styles.input, formik.errors.correo && styles.inputError]}
            />
            <Input
                placeholder="Contraseña"
                variant="unstyled"
                secureTextEntry
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                style={[styles.input, formik.errors.password && styles.inputError]}
            />
            <Button
                style={styles.btn}
                onPress={formik.handleSubmit}
                isLoading={formik.isSubmitting}
            >
                Crear cuenta
            </Button>
        </View>
    )
}