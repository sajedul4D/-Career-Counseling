import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase';
export const authContext=createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState()
    const [loader,setLoader]=useState(true)
    
 const handleRegister=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const handleLogin=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 const mangeProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
 }

const handleLogOut=()=>{
    setLoader(true)
    return signOut(auth)

}

 useEffect(()=>{
    const UnSubscribe=onAuthStateChanged (auth ,(curent)=>{
        setLoader(false)
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
        handleLogOut,
        loader,
        mangeProfile
     }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;