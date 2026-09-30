import { useEffect, useState } from 'react';
import { listarUsuarios } from '../../services/usuarioService';

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    const buscarUsuarios = async () => {
        try {
            const resposta = await listarUsuarios();

            console.log(resposta);

            setUsuarios(resposta.data);
        } catch (erro) {
            console.error('Erro ao buscar usuários:', erro);
        }
    };

    return (
        <div>
            <h1>Usuários</h1>

            {usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <p>ID: {usuario.id}</p>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Usuarios;