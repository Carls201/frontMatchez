import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { CreateSalaScreen } from "../../screens/Sala";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function CreateSalaNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...styles.stackNavigationStyles,
            }}
        >
            <Stack.Screen
                name={screens.tab.createSala.createSalaScreen}
                component={CreateSalaScreen}
            />

        </Stack.Navigator>
    );
}