import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: '#0F172A',
    },
    headerTintColor: '#FFFFFF',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    headerShadowVisible: false,
    animation: 'slide_from_right',
    contentStyle: {
        backgroundColor: '#111827',
    },
};

const NavStack = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={defaultScreenOptions}>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: '🏠 Tela Principal',

                        headerStyle: {
                            backgroundColor: '#2563EB',
                        },
                    }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        title: '📝 Cadastro',

                        headerStyle: {
                            backgroundColor: '#7C3AED',
                        },
                    }}
                />

                <Stack.Screen
                    name="Relatório"
                    component={Relatorio}
                    options={{
                        title: '📊 Relatórios',

                        headerStyle: {
                            backgroundColor: '#059669',
                        },
                    }}
                />

                <Stack.Screen
                    name="Graficos"
                    component={Graficos}
                    options={{
                        title: '📈 Gráficos',

                        headerStyle: {
                            backgroundColor: '#DC2626',
                        },

                        animation: 'fade',
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default NavStack;