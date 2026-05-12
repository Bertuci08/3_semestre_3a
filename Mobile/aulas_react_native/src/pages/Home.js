import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Bem-vindo 👋
            </Text>

            <Text style={styles.subtitle}>
                Sistema de Navegação
            </Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#7C3AED' }]}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>
                    📝 Tela de Cadastro
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#059669' }]}
                onPress={() => navigation.navigate('Relatório')}
            >
                <Text style={styles.buttonText}>
                    📊 Tela de Relatório
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#DC2626' }]}
                onPress={() => navigation.navigate('Graficos')}
            >
                <Text style={styles.buttonText}>
                    📈 Tela de Gráficos
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
        fontSize: 38,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
    },

    subtitle: {
        fontSize: 18,
        color: '#CBD5E1',
        marginBottom: 40,
    },

    button: {
        width: '90%',
        paddingVertical: 18,
        borderRadius: 18,
        marginBottom: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

});

export default Home;