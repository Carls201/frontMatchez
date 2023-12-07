import { StyleSheet } from "react-native";
import { assets } from '../../../assets';
const { backColor1, backColor2, textColor1, textColor2, mainColor, orangeColor } = assets.colors;

export const styles = new StyleSheet.create({
    content: {
        gap: 14,
        marginTop: 30,
        alignItems: 'center'
    },
    viewInput: {
        // marginBottom: 5,

    },
    contentInputs: {
        width: 300
    },
    input: {
        borderRadius: 5,
        backgroundColor: backColor1,
        color: textColor1,
        fontSize: 18,
        // marginHorizontal: 40,
        // width: 300
    },
    text: {
        color: textColor1,
        fontSize: 18,
        padding: 0,
        marginBottom: 15
    },

    btn: {
        backgroundColor: backColor1, 
        padding: 10,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
        marginBottom: 10,
        alignItems: 'left'
    },
    contentButtons: {
        alignItems: 'center',
    },
    btn2: {
        backgroundColor: mainColor, 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: 300
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

    textOrange: {
        color: orangeColor
    }
    
})