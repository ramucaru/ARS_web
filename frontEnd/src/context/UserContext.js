import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth"

const userContext = createContext();

export const UserContext = ({ children }) => {

    const [user, setUser] = useState({});

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    const ResetPasswordwithEmail = (email) => {
        console.log(email);
        return sendPasswordResetEmail(auth, email);
    }

    const recaptchaVerifier = (number) => {
        const recaptcha = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                console.log(response, "recaptchaVerifierResponse");
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        }, auth);
        recaptcha.render().then((id)=>{
            console.log(id,"widgetId");
        });
        return signInWithPhoneNumber(auth, number, recaptcha);
    }

    useEffect(() => {
        const onAuthStateChange = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser);
            setUser(currentUser);
        })

        return () => {
            onAuthStateChange();
        }
    }, []);

    return (
        <userContext.Provider value={{ user, signUp, signin, logout, googleSignIn, ResetPasswordwithEmail, recaptchaVerifier }}>
            {children}
        </userContext.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(userContext);
}