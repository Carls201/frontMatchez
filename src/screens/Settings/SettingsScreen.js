import React from 'react'
import { SafeAreaView } from 'react-native'
import { useAuth } from "../../hooks"
import { UserInfo, Options } from '../../components/Settings'

export function SettingsScreen() {
    const { profile, user, accessToken, logout, updateUser, updateProfile, perfill } = useAuth()
    // console.log(user)
    return (
        <SafeAreaView>
            <UserInfo profile={perfill} user={user.data} />
            <Options profile={profile} user={user.data} accessToken={accessToken} logout={logout} updateUser={updateUser} updateProfile={updateProfile}/>
        </SafeAreaView>
    )
}