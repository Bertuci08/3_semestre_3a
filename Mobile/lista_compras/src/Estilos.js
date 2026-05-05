import { StyleSheet } from "react-native";

export const corPrincipal = '#59b6ff';
export const corSecundaria = '#706ef9';
export const corTexto = '#f2f2f2';
export const corFundo = '#0d0d0d';
export const corFundo2 = '#262626';
export const corPlaceholder = '#808080';

const Estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: corFundo,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    logo: {
        width: 300,
        height: 40,
        resizeMode: 'contain',
    },
    corpo : {
        flex: 1,
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: corFundo2,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: corPrincipal,
        marginRight: 6,
        paddingHorizontal: 10,
        color: corTexto,
        fontSize: 16
    },
    botao: {
        width: 50,
        borderRadius: 6,
        backgroundColor: corPrincipal,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao: {
        color: corTexto,
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 5,
    },
    botaoItem: {
        backgroundColor: corFundo2,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: corPlaceholder,
        justifyContent: 'space-between',
    },
    textoBotaoItem: {
        fontSize: 16,
        color: corTexto,
    },
    textoBotaoItemComprado: {
        fontSize: 16,
        color: corPlaceholder,
        textDecorationLine: 'line-through'
    }
    })

export default Estilos;