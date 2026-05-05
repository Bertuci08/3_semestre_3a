import { Pool } from "pg";

const BD = new Pool({
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "barbearia",
    port: 5432
});

const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
        cliente.release();
    }catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};

export { BD, testarConexao };