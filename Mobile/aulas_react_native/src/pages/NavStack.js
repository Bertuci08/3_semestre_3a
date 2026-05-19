import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Login from './Login';
import NavDrawer from './NavDrawer';
import NavBottom from './NavBottom';
import NavTopTab from './NavTobTabs';

const Stack = createNativeStackNavigator();

const NavStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="MenuPrincipal"
                    component={NavDrawer}
                    options={{
                        title: 'Menu Principal',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Tela Principal',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        title: 'Cadastro',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Relatorio"
                    component={Relatorio}
                    options={{
                        title: 'Relatórios',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Graficos"
                    component={Graficos}
                    options={{
                        title: 'Gráficos',
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavStack;