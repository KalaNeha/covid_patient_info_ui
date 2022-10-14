import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
      return signOut(auth);
  };

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
      });

      return () => unsubscribe();
  }, [currentUser]);

  const value = {
      currentUser,
      login,
      logout,
  };

  return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
  );
};