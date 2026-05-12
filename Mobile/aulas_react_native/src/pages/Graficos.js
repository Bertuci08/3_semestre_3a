import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Graficos = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                📈 Gráficos
            </Text>

            <Text style={styles.subtitle}>
                Visualização de dados e estatísticas
            </Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#059669' }]}
                onPress={() => navigation.navigate('Relatório')}
            >
                <Text style={styles.buttonText}>
                    📊 Ir para Relatórios
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#7C3AED' }]}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>
                    📝 Ir para Cadastro
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
        backgroundColor: '#0F172A',
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
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
    },

    subtitle: {
        fontSize: 18,
        color: '#94A3B8',
        marginBottom: 40,
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

export default Graficos;