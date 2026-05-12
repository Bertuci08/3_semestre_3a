import { useState, useEffect } from "react";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [usuarios, setUsuarios] = useState([]);

    const [editarIndex, setEditarIndex] = useState(null);

    useEffect(() => {

        const dados = localStorage.getItem("usuarios");

        if (dados) {
            setUsuarios(JSON.parse(dados));
        }

    }, []);

    useEffect(() => {

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

    }, [usuarios]);

    function cadastrar(e) {

        e.preventDefault();

        const usuario = {
            nome,
            email,
            senha
        };

        // editar
        if (editarIndex !== null) {

            const novaLista = [...usuarios];

            novaLista[editarIndex] = usuario;

            setUsuarios(novaLista);

            setEditarIndex(null);

        } else {

            // cadastrar
            setUsuarios([...usuarios, usuario]);

        }

        setNome("");
        setEmail("");
        setSenha("");
    }

    function excluir(index) {

        const novaLista = usuarios.filter(
            (_, i) => i !== index
        );

        setUsuarios(novaLista);
    }

    function editar(index) {

        setNome(usuarios[index].nome);
        setEmail(usuarios[index].email);
        setSenha(usuarios[index].senha);

        setEditarIndex(index);
    }

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.titulo}>
                    Cadastro
                </h1>

                <form
                    onSubmit={cadastrar}
                    style={styles.form}
                >

                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) =>
                            setNome(e.target.value)
                        }
                        style={styles.input}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) =>
                            setSenha(e.target.value)
                        }
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.botao}
                    >

                        {editarIndex !== null
                            ? "Salvar"
                            : "Cadastrar"}

                    </button>

                </form>

                <h2 style={styles.subtitulo}>
                    Usuários
                </h2>

                {usuarios.map((usuario, index) => (

                    <div
                        key={index}
                        style={styles.usuario}
                    >

                        <p>
                            <strong>Nome:</strong>
                            {" "}{usuario.nome}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            {" "}{usuario.email}
                        </p>

                        <p>
                            <strong>Senha:</strong>
                            {" "}{usuario.senha}
                        </p>

                        <div style={styles.botoes}>

                            <button
                                onClick={() =>
                                    editar(index)
                                }
                                style={styles.editar}
                            >
                                Editar
                            </button>

                            <button
                                onClick={() =>
                                    excluir(index)
                                }
                                style={styles.excluir}
                            >
                                Excluir
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

const styles = {

    container: {
        minHeight: "100vh",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
    },

    card: {
        backgroundColor: "#222",
        padding: "30px",
        borderRadius: "15px",
        width: "400px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    },

    titulo: {
        color: "#d4af37",
        textAlign: "center",
        marginBottom: "20px",
    },

    subtitulo: {
        color: "#fff",
        marginTop: "30px",
        marginBottom: "20px",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },

    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        outline: "none",
        fontSize: "15px",
    },

    botao: {
        backgroundColor: "#d4af37",
        color: "#111",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "16px",
    },

    usuario: {
        backgroundColor: "#333",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
        color: "#fff",
    },

    botoes: {
        display: "flex",
        gap: "10px",
        marginTop: "10px",
    },

    editar: {
        backgroundColor: "#d4af37",
        color: "#111",
        border: "none",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
    },

    excluir: {
        backgroundColor: "#ff3b3b",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};