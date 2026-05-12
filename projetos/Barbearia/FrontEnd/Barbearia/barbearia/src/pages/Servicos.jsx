export default function Servicos() {

    const servicos = [
        {
            nome: "Corte Masculino",
            preco: "R$ 50,00",
        },

        {
            nome: "Barba",
            preco: "R$ 30,00",
        },

        {
            nome: "Corte + Barba",
            preco: "R$ 70,00",
        },

        {
            nome: "Sobrancelha",
            preco: "R$ 20,00",
        },
    ];

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.titulo}>
                    Serviços
                </h1>

                <div style={styles.lista}>

                    {servicos.map((servico, index) => (

                        <div
                            key={index}
                            style={styles.item}
                        >

                            <h2 style={styles.nome}>
                                {servico.nome}
                            </h2>

                            <p style={styles.preco}>
                                {servico.preco}
                            </p>

                        </div>

                    ))}

                </div>

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
        marginBottom: "30px",
    },

    lista: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },

    item: {
        backgroundColor: "#333",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    nome: {
        fontSize: "18px",
    },

    preco: {
        color: "#d4af37",
        fontWeight: "bold",
        fontSize: "17px",
    },
};