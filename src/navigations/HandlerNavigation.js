import React from "react";
import { AuthNavigation } from "./stacks"
import { AppNavigation } from "./AppNavigation"
import { useAuth } from "../hooks"

export function HandlerNavigation(){
    const { user } = useAuth();
    //const user = "juan";

    return user ? <AppNavigation/> : <AuthNavigation/>
}