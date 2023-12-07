import React, { useEffect } from "react";
import { AuthNavigation } from "./stacks";
import { AppNavigation } from "./AppNavigation";
import { CreateProfileNavigation } from "./stacks";
import { useAuth } from "../hooks";

export function HandlerNavigation() {
    const { accessToken, login, perfil, perfill, perfilAux, user } = useAuth();

    // console.log(perfill);
    useEffect(() => {
        if (accessToken) {
            perfil(accessToken); 
        }
    }, [perfilAux]);

    if (!accessToken) {
        return <AuthNavigation />;//
    }

    if (!perfill || !perfill.data) {
        return <CreateProfileNavigation />;
    }

    return <AppNavigation />;
}