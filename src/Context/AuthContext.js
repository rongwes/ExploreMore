import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap around the app and provide authentication state
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check for user authentication from local storage on mount
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(userLoggedIn);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch('/api/login', { // Replace with your login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json(); // Adjust based on your response structure
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            // Store user data in local storage if needed
            localStorage.setItem('userData', JSON.stringify(data.user)); // Optional
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error (e.g., set an error state)
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await fetch('/api/signup', { // Replace with your signup endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json(); // Adjust based on your response structure
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            // Optionally store user data
            localStorage.setItem('userData', JSON.stringify(data.user)); // Optional
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle error (e.g., set an error state)
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false'); // Set logout status in local storage
        localStorage.removeItem('userData'); // Optional
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
