import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "../../../firebase/firebasse.confiq";

const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  const manageProfile = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const handleLogout = () => {
    signOut(auth);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    manageProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
