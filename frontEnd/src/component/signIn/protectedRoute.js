import React from "react";
import { Navigate } from "react-router-dom";
import { useCustomContext } from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useCustomContext();
    console.log(user, "user");

    if (!user) {
        return <Navigate to={"/"} />
    }
    return children;

}

export default ProtectedRoute;