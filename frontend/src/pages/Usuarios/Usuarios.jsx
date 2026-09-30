import { useEffect, useState } from 'react';
import {
    getUsuarios,
    getUsuarioPorId,
    editarUsuario,
    excluirUsuario,
    criarUsuario
} from '../../services/usuarioService';
import './Usuarios.css';

function Usuarios() {

   const [usuarios, setUsuarios] = useState([]);
   const [idBusca, setIdBusca] = useState('');
   const [usuarioBuscado, setUsuarioBuscado] = useState(null);
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [modalAberto, setModalAberto] = useState(false);
   const [nomeNovo, setNomeNovo] = useState('');
   const [emailNovo, setEmailNovo] = useState('');
   const [senhaNova, setSenhaNova] = useState('');

    useEffect(() => {
        buscarUsuarios();
    }, []);

    const buscarUsuarios = async () => {
        try {
            const resposta = await getUsuarios();
            setUsuarios(resposta.data);
        } catch (erro) {
            console.error('Erro ao buscar usuários:', erro);
        }
    };

    const buscarUsuarioPorId = async () => {
    try {
        const resposta = await getUsuarioPorId(idBusca);

        setUsuarioBuscado(resposta.data);

        setNome(resposta.data.nome);
        setEmail(resposta.data.email);

    } catch (erro) {
        console.error('Erro ao buscar usuário por ID:', erro);
        setUsuarioBuscado(null);
    }
};


const atualizarUsuario = async () => {
    try {
        await editarUsuario(idBusca, {
            nome: nome,
            email: email
        });

        await buscarUsuarioPorId();
        await buscarUsuarios();

        alert('Usuário editado com sucesso!');
    } catch (erro) {
        console.error('Erro ao editar usuário:', erro);
    }
};

const deletarUsuario = async () => {
    try {
        await excluirUsuario(idBusca);

        setUsuarioBuscado(null);
        setIdBusca('');
        setNome('');
        setEmail('');

        await buscarUsuarios();

        alert('Usuário excluído com sucesso!');
    } catch (erro) {
        console.error('Erro ao excluir usuário:', erro);
    }
};

const cadastrarUsuario = async () => {
    try {
        await criarUsuario({
            nome: nomeNovo,
            email: emailNovo,
            senha: senhaNova
        });

        setNomeNovo('');
        setEmailNovo('');
        setSenhaNova('');
        setModalAberto(false);

        await buscarUsuarios();

        alert('Usuário cadastrado com sucesso!');
    } catch (erro) {
        console.error('Erro ao cadastrar usuário:', erro);
    }
};

   return (
    <div className="pagina-usuarios">
            <h1>Usuários</h1>
            <button onClick={() => setModalAberto(true)}>
    Novo usuário
</button>

{modalAberto && (
    <div className="modal-fundo">
        <div className="modal">

            <h2>Cadastrar usuário</h2>

            <input
                type="text"
                placeholder="Nome"
                value={nomeNovo}
                onChange={(e) => setNomeNovo(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={emailNovo}
                onChange={(e) => setEmailNovo(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senhaNova}
                onChange={(e) => setSenhaNova(e.target.value)}
            />

            <div className="modal-botoes">

                <button onClick={() => setModalAberto(false)}>
                    Cancelar
                </button>

                <button onClick={cadastrarUsuario}>
                    Cadastrar
                </button>

            </div>

        </div>
    </div>
)}

           <div className="busca">
    <input
        type="number"
        placeholder="Digite o ID"
        value={idBusca}
        onChange={(e) => setIdBusca(e.target.value)}
    />

    <button onClick={buscarUsuarioPorId}>
        Buscar por ID
    </button>
</div>

{usuarioBuscado && (
   <div className="usuario-encontrado">
    <h2>Usuário encontrado</h2>

        <p>ID: {usuarioBuscado.id}</p>

        <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={atualizarUsuario}>
            Editar
        </button>

        <button onClick={deletarUsuario}>
             Excluir
        </button>
    </div>
)}

           <h2>Lista de usuários</h2>

<div className="lista-usuarios">
    {usuarios.map((usuario) => (
        <div className="usuario-card" key={usuario.id}>
            <p><strong>ID:</strong> {usuario.id}</p>
            <p><strong>Nome:</strong> {usuario.nome}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
        </div>
    ))}
    </div>
        </div>
    );
}

export default Usuarios;