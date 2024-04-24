import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();

export function useSession() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (userData !== null) {
                const data = JSON.parse(userData);
                setUser(data);
            }
        };
        getUser();
    }, []); 

    const login = async (userData) => {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
