import { Container } from 'native-base';
import { StyleSheet } from 'react-native'
import { assets } from '../../../assets';

const { backColor1, backColor2, textColor1, textColor2, mainColor, orangeColor } = assets.colors;

export const styles = new StyleSheet.create({
    
    image: {
        width: 300,
        height: 300, 
    },
    container: {
        flex: 1,
        backgroundColor: backColor2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoContainer: {
        marginBottom: 0,
      },
      buttonContainer: {
        width: '80%',
      },
      button1: {
        backgroundColor: textColor1, 
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 35,
      },
      button2: {
        backgroundColor: backColor1, 
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      buttonText1: {
        color: backColor1,
      },
      buttonText2: {
        color: textColor1,
        
      },
      footerText: {
        color: textColor2,
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
      },
      contentTitle: {
        justifyContent: 'center',
        marginBottom: 40
      },
      title: {
        color: textColor1,
        textAlign: 'center',
        fontSize: 30
      },
      matchez: {
        color: mainColor,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
      }
    
});