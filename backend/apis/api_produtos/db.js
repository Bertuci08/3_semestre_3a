import pkg from 'pg';
const { Pool } = pkg;
const BD = new Pool({
    ConnectionString: "//postgres.mlkkcctzmehwbdpuyedy:YSrBAd8xkcR7uZ5G@aws-1-us-east-1.pooler.supabase.com:6543/postgres",
    ssl: {
        rejectUnauthorized: false   // o supabase requer SSL
    }
});



// const BD = new Pool({
//     user: 'postgres',     // usuário do Supabase
//     host: 'localhost',    // host do Supabase
//     password: 'admin',    //normalmente"postgres
//     database: 'bd_produtos',  // senha do banco, NÃO a do site
//     port: 5432,
// // ssl: { rejectUnauthorized: false } // Supabase exige SSL
// });

const testarConexao = async () => {
    try {
        await BD.connect();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
};

export { BD, testarConexao };