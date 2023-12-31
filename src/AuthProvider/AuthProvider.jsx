import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const googleSignIn = () =>{
    setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

const createSignInUser = (email,password) =>{
   setLoading(true)
   return  createUserWithEmailAndPassword(auth,email,password)
}

const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        const userEmail = currentUser?.email || user?.email
        const loggedUser = {email : userEmail}
        setUser(currentUser)
        console.log('current user', currentUser);
        // id user exit then issue a token
        if (currentUser) {
            axios.post( 'https://cat-doctor-server-side.vercel.app/jwt' , loggedUser , {withCredentials : true})
            .then(res => {
                console.log( "token response", res.data);
            })
        }else{
            axios.post('https://cat-doctor-server-side.vercel.app/logout',loggedUser,
            {withCredentials:true})
            .then(res => {
                console.log(res.data);
            })

        }
    });
    return () =>{
        unSubscribe()
    }
  },[])

const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}


const userInfo = {googleSignIn,user,setUser,logOut,loading,signInUser,createSignInUser} 


    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;