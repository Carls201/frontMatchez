import { ENV } from "../utils";

export class Perfil {
    async getProfileByIdUser(accessToken) {
        try{
            const url = `${ENV.API_URL}/perfil/byid`;
            const params = {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                }
            }

            const response = await fetch(url, params);
            const result = await response.json();

            return result;
        }catch(error){
            throw error;
        }
    }

    async createPerfil(accessToken, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            const url = `${ENV.API_URL}/perfil/completar`;
            const params = {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: formData
            }

            const response = await fetch(url, params);
            const result = await response.json();

            return result;

        } catch (error) {
            throw error;
        }
    }

}