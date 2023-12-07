import { SafeAreaView, Text } from "react-native";
import { style } from "./HomeScreen.styles";
export function HomeScreen(){
    return (
        <SafeAreaView>
            <Text style={style.text}>Este es el Home</Text> 
        </SafeAreaView>
    )
}

