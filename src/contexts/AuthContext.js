import { useState, useEffect, createContext } from "react"
import { User, Auth, Perfil, Deporte } from "../api";
import { hasExpiredToken } from "../utils";

const userController = new User();
const authController = new Auth();
const perfilController = new Perfil();
const deporteController = new Deporte();

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deportes, setDeportes] = useState(null);

    const [perfill, setPerfil] = useState(null);
    const [perfilAux, setPerfilAux] = useState(null);

    useEffect(() => {
        (async () => {
            const accessToken = await authController.getAccessToken();
            const refreshToken = await authController.getRefreshToken();

            if (!accessToken || !refreshToken) {
                logout();
                setLoading(false);
                return;
            }

            if (hasExpiredToken(accessToken)){
                if(hasExpiredToken(refreshToken)){
                    logout()
                }else{
                    reLogin(refreshToken)
                }
            }else{
                await login(accessToken)
            }

            setLoading(false);
        })()
    }, [])

    const reLogin = async (refreshToken) => {
        try {
            const {accessToken} = await authController.refreshAccessToken(refreshToken)

            await authController.setAccessToken(accessToken)
            await login(accessToken)
        } catch (error) {
            console.error(error)
        }
    };

    const login = async (accessToken) => {
        try {
            setLoading(true)
            const response = await userController.getMe(accessToken)
            const resProfile = await userController.getProfile(accessToken, response)

            setProfile(resProfile)
            setUser(response)
            setToken(accessToken)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
            return;
        }
    };

    const perfil = async (accessToken) => {
        const response = await perfilController.getProfileByIdUser(accessToken);
        // console.log(response);
        setPerfil(response);
        
    }

    const crearPerfil = async (accessToken, data) => {
        const response = await perfilController.createPerfil(accessToken, data);
        setPerfilAux(response);
    }

    // Buscar Deportes
    const getDeportes = async (accessToken) => {
        const response = await deporteController.getDeportes(accessToken);
        setDeportes(response);
    }

    const logout = () => {
        setUser(null);
        setProfile(null);
        setToken(null);
        setPerfilAux(null);
        setPerfil(null);
        authController.removeTokens()
    };

    const updateProfile = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
        console.log(profile)
    }

    const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value,
        })
    }


    const data = {
        accessToken: token,
        user,
        profile,
        login,
        logout,
        updateUser,
        updateProfile,
        perfill,
        perfilAux,
        crearPerfil,
        perfil,
        getDeportes,
        deportes
    };

    if (loading) return null;


    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}