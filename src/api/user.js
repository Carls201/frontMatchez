import { ENV } from "../utils";

export class User {
    async getMe(accessToken) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`
            const params = {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                }
            }
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }

    async updateUser(user, accessToken, userData) {
        const urlPerfil = `${ENV.API_URL}/${ENV.ENDPOINTS.PROFILE.BUSCAR}` + user.nick
        const perfilParams = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        }
        const exist = await fetch(urlPerfil, perfilParams)
        const res = await exist.json()
        try {

            // console.log(res)

            const method = "POST" ? "PATCH" : res.data !== null
            const data = userData
            const formData = new FormData()
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key])
            })
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PROFILE.COMPLETAR}` ? `${ENV.API_URL}/${ENV.ENDPOINTS.PROFILE.ME}` : res.data !== null
            const params = {
                method: method,
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: formData,
            }

            const response = await fetch(url, params);
            const result = await response.json();
            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }

    async getProfile(accessToken, user) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PROFILE.BUSCAR}` + user.data.nick
            const params = {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                }
            }
            const response = await fetch(url, params);
            const result = await response.json();;

            return result;
        } catch (error) {
            throw error
        }
    }

    async crearProfile(accessToken) {
        try {
            const objJ = {
                nombre: "nombre",
                fecha_nac: "11/11/2005",
                altura: "1.75",
                peso: "80",
                sexo: "hombre",
            }
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PROFILE.COMPLETAR}`
            const params = {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objJ)
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }
    }
}