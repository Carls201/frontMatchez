import { SafeAreaView, Image, View, Text, Button, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../../utils"
import { assets } from "../../../assets"
import { styles } from "./AuthStartScreen.styles"

export function AuthStartScreen() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate(screens.auth.loginScreen);
    }

    const goToRegister = () => {
        navigation.navigate(screens.auth.registroScreen);
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source = {assets.image.jpg.auth01} style={styles.image}/>
            </View>

            <View style={styles.contentTitle}>
                <Text style={styles.title}>Bienvenido a</Text>
                <Text style={styles.matchez}>MatchEz</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToLogin} style={styles.button1}>
                <Text style={styles.buttonText1}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={goToRegister}>
                <Text style={styles.buttonText2}>REGISTRASE</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
                Al ingresar aceptas nuestro Condiciones de uso y Política de privacidad
            </Text>

        </View>
    )
}