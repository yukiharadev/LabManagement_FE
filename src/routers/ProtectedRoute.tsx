import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import React from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const {token} = useAuth();
    if (!token) {
        return <Navigate to="/auth"/>;
    }
    return children;
};
