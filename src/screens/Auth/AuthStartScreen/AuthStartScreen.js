import { SafeAreaView, Image, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../../utils"
import { assets } from "../../../assets"
import { styles } from "./AuthStartScreen.styles"

export function AuthStartScreen() {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate(screens.auth.loginScreen)
    }
    
    return (
        <SafeAreaView style={styles.content}>
            <Image source = {assets.image.jpg.auth01} style={styles.image}/>

            <View>
                <Text style={styles.title}>Bienvenido a MatchEz</Text>
                <Text style={styles.btn} onPress={goToLogin}>Aceptar terminos y continuar</Text>
            </View>
        </SafeAreaView>
    )
}