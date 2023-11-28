import { Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as ImagePicker from "expo-image-picker"
import { imageExpoFormat } from "../../../utils"
import { styles } from "./Options.styles"
import { User } from "../../../api"

const userController = new User();

export function Options(props){
    const {user, accessToken, logout, updateUser, updateProfile} = props

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        })

        if (!result.canceled){
            const file = imageExpoFormat(result.assets[0].uri)
            updateUserData({foto:file})
        }
    }

    const updateUserData = async (userData) => {
        try {
            const response = await userController.updateUser(user, accessToken, userData)
            updateProfile("foto", response.data.foto)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text} onPress={openGallery}>Cambiar foto de perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Cambiar nombre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Cambiar fecha de nacimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Cambiar altura</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Cambiar peso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Cambiar sexo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.item, styles.itemClose]} onPress={logout}>
                <Text style={styles.textClose}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}