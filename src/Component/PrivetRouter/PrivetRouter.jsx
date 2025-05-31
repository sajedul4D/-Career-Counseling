import React, { useContext } from 'react';
import { authContext } from '../Authprovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Page/Loader';

const PrivetRouter = ({children}) => {
    const {user,loader}=useContext(authContext)
    const location=useLocation()
    if(loader){
        return <Loader></Loader>
    }
    if(user){
    return children
    }
    return <Navigate state={location.pathname}  to="/login"></Navigate>;
};

export default PrivetRouter;