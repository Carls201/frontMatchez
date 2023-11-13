import { ENV } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Auth {
    async register(nick, correo, password, id_rol) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({nick, correo, password, id_rol})
            }
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 201) throw result

            return result;
        } catch (error) {
            throw error;
        }
    }

    async login(correo, password) {
        try {
            const url =  `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({correo, password})
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }

    async refreshAccessToken(refreshToken){
        //TODO
    }

    async setAccessToken(token){
        await AsyncStorage.setItem(ENV.JWT.ACCESS, token)
    }

    async getAccessToken(token){
        return await AsyncStorage.getItem(ENV.JWT.ACCESS)
    }

    async setRefreshToken(token){
        await AsyncStorage.setItem(ENV.JWT.REFRESH, token)
    }

    async getRefreshToken(){
        return await AsyncStorage.getItem(ENV.JWT.REFRESH)
    }

    async removeTokens(){
        await AsyncStorage.removeItem(ENV.JWT.ACCESS)
        await AsyncStorage.removeItem(ENV.JWT.REFRESH)
    }
}
