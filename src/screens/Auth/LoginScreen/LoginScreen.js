import { View, Text, Image } from "react-native";
import { LoginForm } from "../../../components/Auth";
import { styles } from './LoginScreen.styles';
import { assets } from '../../../assets';

export function LoginScreen() {

    

    return (
        <View style={styles.content}>

            <View style={styles.logoContainer}>
                <Image source = {assets.image.jpg.auth01} style={styles.image}/>
            </View>

            <View style={styles.contentTitle}>
                <Text style={styles.title}>Iniciar <Text style={styles.matchez}>sesión</Text></Text>
            </View>


            <LoginForm/>

        </View>
    )
}