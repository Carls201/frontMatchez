import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/Home";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...styles.stackNavigationStyles,
            }}
        >
            <Stack.Screen
                name={screens.tab.home.homeScreen}
                component={HomeScreen}
            />

        </Stack.Navigator>
    );
}