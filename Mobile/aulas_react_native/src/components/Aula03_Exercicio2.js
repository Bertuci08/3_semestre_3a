import { View, Text, FlatList, Image } from 'react-native'
import Hr from './Hr'

const Aula03_Exercicio2 = () => {

    const produtos = [
        {
            id: 1,
            foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_865487-MLB97245937515_112025-F-camiseta-superman-super-homem-dc-comics-premium.webp',
            nome: 'Camiseta do Super Man',
            categoria: 'Roupas',
            preco: 49.90,
            estoque: 100,
        },
        {
            id: 2,
            foto: 'https://www.youcom.com.br/_next/image?url=https%3A%2F%2Fimg.youcom.com.br%2FCustom%2FContent%2FProducts%2F11%2F13%2F1113281_calca-reta-jeans-marmorizada_l28_638853413689700985.webp&w=750&q=100',
            nome: 'Calça Jeans',
            categoria: 'Roupas',
            preco: 99.90,
            estoque: 50,
        },
        {
            id: 3,
            foto: 'https://images.tcdn.com.br/img/img_prod/1247978/tenis_puma_masculino_court_classic_clean_40444001_branco_20951_1_534fec29afe4ef40fed1af7a77998c92.jpg',
            nome: 'Tênis',
            categoria: 'Calçados',
            preco: 199.90,
            estoque: 30,
        },
        {
            id: 4,
            foto: 'https://imgnike-a.akamaihd.net/768x768/031600IDA12.jpg',
            nome: 'Camisa Corinthians',
            categoria: 'Roupas',
            preco: 149.90,
            estoque: 20,
        },
        {
            id: 5,
            foto: 'https://http2.mlstatic.com/D_NQ_NP_806940-MLB80097750029_102024-O.webp',
            nome: 'Boné',
            categoria: 'Acessórios',
            preco: 29.90,
            estoque: 200,
        },
    ]

    const exibirProduto = ({ item }) => {
        return (
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>ID: {item.id}</Text>
                <Image source={item.foto } style={{ width: 100, height: 100 }} />
                <Text>{item.nome}</Text>
                <Text>Categoria: {item.categoria}</Text>
                <Text>Preço: R$ {item.preco}</Text>
                <Text>Estoque: {item.estoque}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
                Lista de Produtos
            </Text>
            <FlatList
                data={produtos}
                renderItem={exibirProduto}
            />
        </View>
    )
}

export default Aula03_Exercicio2;
