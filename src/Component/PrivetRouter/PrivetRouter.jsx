import React, { useContext } from 'react';
import { authContext } from '../Authprovider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user}=useContext(authContext)
    if(user){
    return children
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRouter;