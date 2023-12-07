import { StyleSheet } from "react-native";
import { assets } from '../../../assets';
const { backColor1, backColor2, textColor1, textColor2, mainColor, orangeColor } = assets.colors;

export const styles = new StyleSheet.create({
    content: {
        gap: 30,
        marginTop: 30
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
    text: {
        color: textColor1,
        fontWeight: 'bold',
        padding: 0,
        margin: 0
    },

    btn: {
        backgroundColor: orangeColor, 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    btn2: {
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
    },
    contentButton:{
        alignItems: 'center'
    },
    buttonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: mainColor,
        borderRadius: 100,
        width: 90,
        height: 90
    },
    buttonText: {
        color: mainColor,
        fontSize: 50,
    },
    contentRadio: {
        justifyContent: 'center'
    },
    icons: {
        // fontSize: 10
    }
    
})