import { useState, useEffect } from "react";

export default function Agendamento() {

    const [nome, setNome] = useState("");
    const [corte, setCorte] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const dados = localStorage.getItem("agendamentos");

        if (dados) {
            setLista(JSON.parse(dados));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "agendamentos",
            JSON.stringify(lista)
        );
    }, [lista]);

    function agendar(e) {

        e.preventDefault();

        const novo = {
            nome,
            corte,
            data,
            hora
        };

        setLista([...lista, novo]);

        setNome("");
        setCorte("");
        setData("");
        setHora("");
    }

    return (
        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.titulo}>
                    Agendamento
                </h1>

                <form
                    onSubmit={agendar}
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

                    <select
                        value={corte}
                        onChange={(e) =>
                            setCorte(e.target.value)
                        }
                        style={styles.input}
                    >
                        <option value="">
                            Selecione
                        </option>

                        <option value="Corte">
                            Corte
                        </option>

                        <option value="Barba">
                            Barba
                        </option>

                        <option value="Corte + Barba">
                            Corte + Barba
                        </option>

                    </select>

                    <input
                        type="date"
                        value={data}
                        onChange={(e) =>
                            setData(e.target.value)
                        }
                        style={styles.input}
                    />

                    <input
                        type="time"
                        value={hora}
                        onChange={(e) =>
                            setHora(e.target.value)
                        }
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.botao}
                    >
                        Agendar
                    </button>

                </form>

                <h2 style={styles.subtitulo}>
                    Agendamentos
                </h2>

                {lista.map((item, index) => (

                    <div
                        key={index}
                        style={styles.item}
                    >

                        <p>
                            <strong>Nome:</strong>
                            {" "}{item.nome}
                        </p>

                        <p>
                            <strong>Corte:</strong>
                            {" "}{item.corte}
                        </p>

                        <p>
                            <strong>Data:</strong>
                            {" "}{item.data}
                        </p>

                        <p>
                            <strong>Hora:</strong>
                            {" "}{item.hora}
                        </p>
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

    item: {
        backgroundColor: "#333",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
        color: "#fff",
    },
};