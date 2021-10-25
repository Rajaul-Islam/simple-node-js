import React, { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    // const {children}=props;
    const allcontexts=useFirebase()
    return (
        <AuthContext.Provider value={allcontexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;