import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Relatorio = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                📊 Relatórios
            </Text>

            <Text style={styles.subtitle}>
                Área de análise e informações do sistema
            </Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#7C3AED' }]}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>
                    📝 Ir para Cadastro
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#DC2626' }]}
                onPress={() => navigation.navigate('Graficos')}
            >
                <Text style={styles.buttonText}>
                    📈 Ir para Gráficos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#2563EB' }]}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>
                    ⬅ Voltar para Home
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#111827',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,

        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 6,
    },

    subtitle: {
        fontSize: 18,
        color: '#9CA3AF',
        marginBottom: 40,
        textAlign: 'center',
    },

    button: {
        width: '90%',
        paddingVertical: 18,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',

        elevation: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

});

export default Relatorio;