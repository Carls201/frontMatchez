import { View, Text } from "react-native";
import { Avatar } from "native-base";
import { ENV } from "../../../utils";
import { styles } from "./UserInfo.styles";

export function UserInfo(props) {
    const { user, profile } = props
    return (
        <View style={styles.content}>
            <Avatar
                bg="cyan.500"
                marginRight={3}
                size="xl"
                style={styles.avatar}
                source={{ uri: profile.data.foto && `${ENV.BASE_PATH}/${profile.data.foto}`}}
            >
                {user.correo.substring(0, 2).toUpperCase()}
            </Avatar>

            {user.nick ? (
                <Text style={styles.identity}>
                    {`${user.nick}` || ""}
                </Text>
            ) : null}

            <Text style={styles.correo}>{user.correo}</Text>
        </View>
    )
}