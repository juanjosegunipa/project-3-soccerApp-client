import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem('authToken')
        if (storeToken) {

            axios.get('http://localhost:3001/verify', {
                headers: {
                    authorization: `Bearer ${storedToken}`
                }
            })
                .then(res => {
                    console.log(res);
                    const user = res.data
                    setIsLoading(false);
                    setIsLoggedIn(true);
                    setUser(user);
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false);
                    setIsLoggedIn(false);
                    setUser(null)
                })

        } else {
            setIsLoading(false);
            setIsLoggedIn(false);
            setUser(null)
        }
    }

    const removeAuthToken = () => localStorage.removeItem('authToken');
    const logOutUser = () => {
        removeAuthToken();
        authenticateUser();
        navigate('/')
    }

    useEffect(() => {
        authenticateUser();
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser, message, setMessage }}>
            {children}
        </AuthContext.Provider>
    );
}

export {
    AuthContext,
    AuthProvider
}