import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

// create context

export const AuthContext = createContext()

// Context Function 
const AuthProvider = ({ children }) => {
    // use Firebase hook declear 
    const allContext = useFirebase()

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
