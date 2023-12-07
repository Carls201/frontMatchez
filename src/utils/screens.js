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

const home = {
    root: "HomeRoot",
    homeScreen: "HomeScreen",
}

const chats = {
    root: "ChatsRoot",
    chatsScreen: "ChatsScreen",
    createChatScreen: "CreateChatScreen",
}

const createSala = {
    root: "CreateSalaRoot",
    createSalaScreen: "Crear Sala"
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

const createProfile = {
    root: "CreateProfile",
    createProfileScreen: "CreateProfileScreen"
}

export const screens = {
    auth,
    global,
    tab: {
        root: "BottonTabRoot",
        home,
        chats,
        groups,
        settings,
        createProfile,
        createSala,
    }
}