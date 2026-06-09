import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Principal() {
    const navigate = useNavigate();
    const [dadosLogin, setDadosLogin] = useState(null);

    useEffect(() => {
        async function buscarUsuario() {
            const usuarioLogado = localStorage.getItem("Usuario Logado");
            if (usuarioLogado) {
                setDadosLogin(JSON.parse(usuarioLogado));
            }
        }
        buscarUsuario();
    }, []);

    function botaoLogout() {
        localStorage.removeItem("Usuario Logado");
        navigate("/");
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0A66C2, #2563EB)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "40px",
                    borderRadius: "24px",
                    width: "100%",
                    maxWidth: "450px",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0A66C2, #2563EB)",
                        color: "#fff",
                        fontSize: "36px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto 20px",
                    }}
                >
                    {dadosLogin?.usuario?.nome?.charAt(0)?.toUpperCase()}
                </div>

                <h2
                    style={{
                        margin: 0,
                        color: "#222",
                    }}
                >
                    {dadosLogin?.usuario?.nome}
                </h2>

                <p
                    style={{
                        color: "#666",
                        marginTop: "8px",
                        marginBottom: "30px",
                    }}
                >
                    {dadosLogin?.usuario?.email}
                </p>

                <button
                    onClick={botaoLogout}
                    style={{
                        backgroundColor: "#EF4444",
                        color: "#fff",
                        border: "none",
                        padding: "14px 24px",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        width: "100%",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#DC2626")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#EF4444")
                    }
                >
                    Sair da Conta
                </button>
            </div>
        </div>
    );
}