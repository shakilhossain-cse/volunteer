import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const [User, setUser] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // login in useing google
  const loginWithGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logout = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      }).finally(() => {
        setIsLoading(false)
      })
      ;
  };

  // onAuthState
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false)
    });
  }, []);

  return { User, setUser, loginWithGoogle, logout , setIsLoading, IsLoading};
};

export default useFirebase;
