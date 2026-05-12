import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Agendamentos from "./pages/Agendamentos";
import Servicos from "./pages/Servicos";

function LandingPage() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.titulo}>BarberShop</h1>

      <p style={styles.subtitulo}>
        Estilo, qualidade e o melhor atendimento para você.
      </p>

      <div style={styles.botoes}>
        <Link style={styles.botao} to="/login">
          Fazer Login
        </Link>

        <Link style={styles.botaoSecundario} to="/cadastro">
          Criar Conta
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <nav style={styles.menu}>
          <Link style={styles.link} to="/">
            Início
          </Link>

          <Link style={styles.link} to="/login">
            Login
          </Link>

          <Link style={styles.link} to="/cadastro">
            Cadastro
          </Link>

          <Link style={styles.link} to="/agendamentos">
            Agendamento
          </Link>

          <Link style={styles.link} to="/servicos">
            Serviços
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route
            path="/agendamentos"
            element={<Agendamentos />}
          />

          <Route
            path="/servicos"
            element={<Servicos />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    minHeight: "100vh",
    backgroundColor: "#111",
    color: "#fff",
  },

  menu: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#d4af37",
  },

  link: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "bold",
    fontSize: "18px",
  },

  hero: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },

  titulo: {
    fontSize: "70px",
    color: "#d4af37",
    marginBottom: "20px",
  },

  subtitulo: {
    fontSize: "22px",
    color: "#ccc",
    marginBottom: "40px",
  },

  botoes: {
    display: "flex",
    gap: "20px",
  },

  botao: {
    backgroundColor: "#d4af37",
    color: "#111",
    padding: "15px 30px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  },

  botaoSecundario: {
    border: "2px solid #d4af37",
    color: "#d4af37",
    padding: "15px 30px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  },
};