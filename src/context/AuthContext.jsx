import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(()=> localStorage.getItem("token") || null);

    const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken)
    }
    const logout = ()=> {
        localStorage.removeItem("token");
        setToken(null)
    }
    const isLoggedIn =!!token;

    return ( <AuthContext.Provider value={{token, isLoggedIn, logout, login}}>{children}</AuthContext.Provider>)
    }

    export function useAuth() {
        return useContext(AuthContext)
    }