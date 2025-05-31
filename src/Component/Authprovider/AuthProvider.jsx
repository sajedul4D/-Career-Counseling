import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase';
export const authContext=createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState()
 const handleRegister=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const handleLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }

const handleLogOut=()=>{
    return signOut(auth)

}
 useEffect(()=>{
    const UnSubscribe=onAuthStateChanged (auth ,(curent)=>{
        setUser(curent)

    })
    return()=>{
        UnSubscribe()
    }
 },[])
     const authInfo={
        handleRegister,
        handleLogin,
        user,
        handleLogOut
     }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;