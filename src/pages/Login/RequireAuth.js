import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const user = true;
    let location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireAuth;