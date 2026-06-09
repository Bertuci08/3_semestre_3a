import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Principal({ navigation }) {
    const [dadosLogin, setDadosLogin] = useState(null);

    useEffect(() => {
        async function buscarUsuario() {
            const usuarioLogado = await AsyncStorage.getItem("Usuario logado");
            if (usuarioLogado) {
                setDadosLogin(JSON.parse(usuarioLogado));
            }
        }
        buscarUsuario();
    }, []);

    function botaoLogout() {
        AsyncStorage.removeItem("Usuario logado");
        navigation.navigate('Login');
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#F4F6F9',
                padding: 20,
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    backgroundColor: '#FFF',
                    borderRadius: 20,
                    padding: 25,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 6,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: '#007AFF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 30,
                                fontWeight: 'bold',
                            }}
                        >
                            {dadosLogin?.usuario?.nome?.charAt(0)?.toUpperCase()}
                        </Text>
                    </View>

                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: '#1A1A1A',
                        }}
                    >
                        {dadosLogin?.usuario?.nome}
                    </Text>

                    <Text
                        style={{
                            fontSize: 15,
                            color: '#777',
                            marginTop: 4,
                        }}
                    >
                        {dadosLogin?.usuario?.email}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={botaoLogout}
                    style={{
                        backgroundColor: '#FF3B30',
                        paddingVertical: 14,
                        borderRadius: 12,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Sair da Conta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}