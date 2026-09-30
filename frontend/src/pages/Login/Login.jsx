import { useContext, useState } from 'react';
import { login } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {

    const { entrar } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

   const fazerLogin = async () => {
    try {
        const resposta = await login(email, senha);

        entrar(resposta.token);

        alert('Login realizado com sucesso!');

    } catch (erro) {
        console.error('Erro ao realizar login:', erro);
        alert('Email ou senha inválidos');
    }
};

    return (
        <div>
            <h1>Login</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={fazerLogin}>
                Entrar
            </button>
        </div>
    );
}

export default Login;