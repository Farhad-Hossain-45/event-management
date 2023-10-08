/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSingIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    } 
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSingIn,
        logOut,
        

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;