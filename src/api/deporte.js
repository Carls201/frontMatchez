 import { ENV } from "../utils";

 export class Deporte {
    async getDeportes(accessToken) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DEPORTE.BUSCAR}`
            const params = {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }

            const response = await fetch(url, params);
            const result = await response.json();

            if(!result.success) throw result;

            return result;

        } catch (error) {
            throw error;
        }
    }
 }