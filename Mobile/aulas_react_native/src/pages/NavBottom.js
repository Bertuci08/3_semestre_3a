import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Login from './Login';
import NavDrawer from './NavDrawer';
import NavStack from './NavStack';
import NavTopTab from './NavTobTabs';

const Bottom = createBottomTabNavigator();

const NavBottom = () => {
    return (
        <NavigationContainer>
            <Bottom.Navigator initialRouteName='Login' >

                <Bottom.Screen
                    name="Home"
                    component={Home}

                        //COLOCANDO ICONE
                        // options={{
                        //     tabBarIcon: ({size, color}) => <MaterialIcons/>
                        // }}
                />

                <Bottom.Screen
                    name="Login"
                    component={Login}
                />

                <Bottom.Screen
                    name="MenuPrincipal"
                    component={NavDrawer}
                />

                <Bottom.Screen
                    name="Cadastro"
                    component={Cadastro}
                />

                <Bottom.Screen
                    name="Relatório"
                    component={Relatorio}
                />

                <Bottom.Screen
                    name="Graficos"
                    component={Graficos}
                />

            </Bottom.Navigator>
        </NavigationContainer>
    );
};

export default NavBottom;