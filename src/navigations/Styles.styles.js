import { StyleSheet } from "react-native"
import { assets } from "../assets"

const { backColor1, backColor2 } = assets.colors;
export const styles = new StyleSheet.create(
    {
        stackNavigationStyles: {
            contentStyle: {
                backgroundColor: backColor2,
            },
            headerStyle: {
                backgroundColor: "#000"
            },
            headerTitleStyle: {
                color:"#fff"
            }
        },
        modalStyles: {
            contentStyle: {
                backgroundColor: "#171717"
            },
            headerStyle: {
                backgroundColor: "#171717"
            },
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
)