import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrar(e) {
        e.preventDefault();
        alert("Login realizado!");
    }

    return (
        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.titulo}>
                    Login
                </h1>

                <form
                    onSubmit={entrar}
                    style={styles.form}
                >

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.botao}
                    >
                        Entrar
                    </button>

                </form>

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
        fontFamily: "Arial",
    },

    card: {
        backgroundColor: "#222",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    },

    titulo: {
        color: "#d4af37",
        textAlign: "center",
        marginBottom: "25px",
        fontSize: "35px",
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
};