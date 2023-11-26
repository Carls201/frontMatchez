let miIp = "192.168.1.100"
const SERVER_IP = `${miIp}:3977`

export const ENV = {
    SERVER_IP: SERVER_IP,
    BASE_PATH: `http://${SERVER_IP}`,
    API_URL: `http://${SERVER_IP}/api`,
    SOCKET_URL: `http://${SERVER_IP}`,
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/registro",
            LOGIN: "auth/login",
        },
        ME: "usuario/me"
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh"
    }

}