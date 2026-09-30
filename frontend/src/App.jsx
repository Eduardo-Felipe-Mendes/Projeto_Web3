import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Usuarios from './pages/Usuarios/Usuarios';

function App() {

    const { autenticado } = useContext(AuthContext);

    return (
        <>
            {autenticado ? <Usuarios /> : <Login />}
        </>
    );
}

export default App;