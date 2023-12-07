import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateProfileScreen } from "../../screens/CreateProfile";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function CreateProfileNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...styles.stackNavigationStyles,
            }}
        >
            <Stack.Screen
                name={screens.tab.createProfile.createProfileScreen}
                component={CreateProfileScreen}
            />
        </Stack.Navigator>
    );
}
