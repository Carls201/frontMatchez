import { StyleSheet } from "react-native";
import { assets } from '../../../assets';
const { backColor1, backColor2, textColor1, textColor2, mainColor, orangeColor } = assets.colors;

export const styles = new StyleSheet.create({
    content: {
        gap: 30
    },
    viewInput: {
        marginBottom: 5,
    },
    input: {
        borderRadius: 5,
        backgroundColor: backColor1,
        color: textColor1,
        fontSize: 18,
        marginHorizontal: 5
    },
    btn: {
        backgroundColor: mainColor, 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    textBtn: {
        color: textColor1,
        fontSize: 15
    },
    inputError: {
        backgroundColor: "#270C0D"
    }
})