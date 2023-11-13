import { useState, useEffect, createContext } from "react"
import { User, Auth } from "../api";

const userController = new User();
const authController = new Auth();

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const accessToken = await authController.getAccessToken();
            const refreshToken = await authController.getRefreshToken();

            if (!accessToken || !refreshToken) {
                logout();
                setLoading(false);
                return;
            }

            setLoading(false);
        })()
    }, [])

    const reLogin = async (refreshToken) => {
        //TODO
    };

    const login = async (accessToken) => {
        try {
            setLoading(true)
            const response = await userController.getMe(accessToken)
            setUser(response)
            setToken(accessToken)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
            return;
        }
    };

    const logout = () => {
        console.log("LOGOUT....")
    };

    const updateUser = (key, value) => {
        //TODO
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser
    };

    if (loading) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}