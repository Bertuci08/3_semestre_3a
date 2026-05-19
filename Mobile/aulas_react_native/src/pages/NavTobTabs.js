import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Login from './Login';
import NavDrawer from './NavDrawer';
import NavStack from './NavStack';
import NavBottom from './NavBottom';

const Tab = createMaterialTopTabNavigator();

const NavTopTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Login' >

                <Tab.Screen
                    name="Home"
                    component={Home}
                />

                <Tab.Screen
                    name="Login"
                    component={Login}
                />

                <Tab.Screen
                    name="MenuPrincipal"
                    component={NavDrawer}
                />

                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                />

                <Tab.Screen
                    name="Relatório"
                    component={Relatorio}
                />

                <Tab.Screen
                    name="Graficos"
                    component={Graficos}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default NavTopTab;