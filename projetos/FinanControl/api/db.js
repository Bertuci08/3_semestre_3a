import { Pool } from 'pg';

// bando do SupaBase
const BD = new Pool({
    connectionString: "postgres://postgres.whdrsrarhrpmnjnpndgd:Jnb8lK1SDIzuBRjW@aws-1-us-east-1.pooler.supabase.com:5432/postgres",
    ssl: {
        rejectUnauthorized: false
    }
})


// Banco do PGAdmin
// const BD = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'admin',
//     database: 'bd_finan_control_3a',
//     port: 5432
// })

const testarConexao = async () =>{
    try{
        const cliente = await BD.connect(); // Realiza a conexão
        console.log('Conexão estabelecida');
        cliente.release(); // Libera a conexão
    }catch(error){
        console.error('Erro ao conectar com o banco', error.message);
    }
}

export {BD, testarConexao}