const auth = {
    authStartScreen: "AuthStartScreen",
    loginScreen: "LoginScreen",
    registroScreen: "RegistroScreen"
}

const global = {
    userProfileScreen: "UserProfileScreen",
    cameraScreen: "CameraScreen",
    imageFullScreen: "ImageFullScreen",
    chatScreen: "ChatScreen",
    groupScreen: "GroupScreen",
    groupProfileScreen: "GroupProfileScreen",
    addUserGroupScreen: "AddUserGroupScreen",
    changeNameGroupScreen: "ChangeNameGroupScreen",
};

const chats = {
    root: "ChatsRoot",
    chatsScreen: "ChatsScreen",
    createChatScreen: "CreateChatScreen",
}

const groups = {
    root: "GroupsRoot",
    groupsScreen: "GroupsScreen",
    createGroupScreen: "CreateGroupScreen",
}

const settings = {
    root: "SettingsRoot",
    settingsScreen: "SettingsScreen",
    changeFirstnameScreen: "ChangeFirstnameScreen",
    changeLastnameScreen: "ChangeLastnameScreen",
}

export const screens = {
    auth,
    global,
    tab: {
        root: "BottonTabRoot",
        chats,
        groups,
        settings,
    }
}