import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { ChatsNavigation, GroupsNavigation, SettingsNavigation, HomeNavigation, CreateSalaNavigation } from "../stacks"
import { screens } from "../../utils"
import { styles } from "./BottomTabNavigation.styles"
import {assets} from "../../assets";
const { mainColor, textColor2 } = assets.colors;

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarInactiveTintColor: textColor2,
                tabBarActiveTintColor: mainColor,
                tabBarIcon: ({color, size}) => screenIcon(route, color, size)
            })}
        >
            <Tab.Screen
                name={screens.tab.home.root}
                component={HomeNavigation}
                options={{ title: "Home"}}
            />
            <Tab.Screen
                name={screens.tab.chats.root}
                component={ChatsNavigation}
                options={{ title: "Chats" }}
            />
            <Tab.Screen
                name={screens.tab.createSala.root}
                component={CreateSalaNavigation}
                options={{ title: "Crear Sala" }}
            />
            <Tab.Screen
                name={screens.tab.groups.root}
                component={GroupsNavigation}
                options={{ title: "Salas" }}
            />
            <Tab.Screen
                name={screens.tab.settings.root}
                component={SettingsNavigation}
                options={{ title: "Configuración" }}
            />
        </Tab.Navigator>
    );
}

function screenIcon(route, color, size) {
    let iconName;

    if(route.name === screens.tab.home.root){
        iconName = "home"
    }
    
    if (route.name === screens.tab.chats.root){
        iconName = "chat"
    }

    if (route.name === screens.tab.createSala.root){
        iconName = "plus-circle"
    }

    if (route.name === screens.tab.groups.root){
        iconName = "account-group"
    }

    if (route.name === screens.tab.settings.root){
        iconName = "cog-outline"
    }

    return (
        <Icon
            as={MaterialCommunityIcons}
            name={iconName}
            color={color}
            size={size}
        />
    )
}