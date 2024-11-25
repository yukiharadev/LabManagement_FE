import React, {createContext, useContext, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "./useLocalStorage";

interface AuthContextType {
    token: string | null;
    login: (data: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [token, setToken] = useLocalStorage<string | null>("token", null);
    const navigate = useNavigate();

    const login = async (data: string) => {
        setToken(data);
        navigate("/");
    };

    const logout = () => {
        setToken(null);
        navigate("/", {replace: true});
    };

    const value = useMemo(
        () => ({
            token,
            login,
            logout,
        }),
        [token],
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
