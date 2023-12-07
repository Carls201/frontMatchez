import { SafeAreaView, Text } from "react-native";
import { CreateSalaForm } from "../../../components/Sala";
import { style } from "./CreateSalaScreen.styles";

export function CreateSalaScreen(){
    return (
        <SafeAreaView>
            <CreateSalaForm/>
        </SafeAreaView>
    )
}
