import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [autenticado, setAutenticado] = useState(
        !!localStorage.getItem('token')
    );

    const entrar = (token) => {
        localStorage.setItem('token', token);
        setAutenticado(true);
    };

    const sair = () => {
        localStorage.removeItem('token');
        setAutenticado(false);
    };

    return (
        <AuthContext.Provider
            value={{
                autenticado,
                entrar,
                sair
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}