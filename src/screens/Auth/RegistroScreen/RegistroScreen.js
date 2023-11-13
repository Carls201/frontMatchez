import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RegisterForm } from "../../../components/Auth"
import { styles } from './RegistroScreen.styles'

export function RegistroScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Registrate para poder empezar a hacer deporte</Text>

            <RegisterForm/>

            <Text style={styles.register} onPress={navigation.goBack}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </View>
    )
}