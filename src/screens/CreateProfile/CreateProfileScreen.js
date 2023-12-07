import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./CreateProfileScreen.styles";
import { PerfilForm } from "../../components/Perfil";
export function CreateProfileScreen() {
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Bienvenido a <Text style={styles.matchez}>MatchEz</Text></Text>
                <Text style={styles.text}>Para continuar completa tu perfil</Text>
            </View>
            <PerfilForm/>
        </SafeAreaView>
    );
}

