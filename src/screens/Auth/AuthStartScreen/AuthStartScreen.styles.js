import { Container } from 'native-base';
import { StyleSheet } from 'react-native'

export const styles = new StyleSheet.create({
    
    image: {
        width: 300,
        height: 300, 
    },
    container: {
        flex: 1,
        backgroundColor: '#1B1B1B', // Assuming the background is black
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
        backgroundColor: '#FBFBFA', // Assuming the buttons are white
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 35,
      },
      button2: {
        backgroundColor: '#2D3435', // Assuming the buttons are white
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      buttonText1: {
        color: '#1B1B1B', // Assuming the button text is black
        // Add your font styling here
      },
      buttonText2: {
        color: '#FBFBFA', // Assuming the button text is black
        // Add your font styling here
      },
      footerText: {
        color: '#ABB6B0', // Assuming the footer text is white
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
        // Add your font styling here
      },
      contentTitle: {
        justifyContent: 'center',
        marginBottom: 40
      },
      title: {
        color: '#FBFBFA',
        textAlign: 'center',
        fontSize: 30
      },
      matchez: {
        color: '#F34C55',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
      }
    
});