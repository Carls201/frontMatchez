import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../../utils"
import { LoginForm } from "../../../components/Auth"
import { styles } from './LoginScreen.styles'

export function LoginScreen() {
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate(screens.auth.registroScreen)
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Iniciar sesión</Text>

            <LoginForm/>

            <Text style={styles.register} onPress={goToRegister}>Registrarse</Text>
        </View>
    )
}