import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// pagina inicial
import FontAwesome from '@expo/vector-icons/FontAwesome';
// grafico
import AntDesign from '@expo/vector-icons/AntDesign';
// cadastro
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// relatorio
import Foundation from '@expo/vector-icons/Foundation';


import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Graficos from './Graficos';
import Aula01 from '../components/Aula01'
import Aula02 from '../components/Aula02'
import Aula02_FlexBox from '../components/Aula02_FlexBox'
import Aula03 from '../components/Aula03'
import Aula03_Exercicio from '../components/Aula03_Exercicio'
import Aula03_Exercicio2 from '../components/Aula03_Exercicio2'
import Aula04 from '../components/Aula04'
import Aula05 from '../components/Aula05'


const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {backgroundColor: 'rgb(199, 199, 199)', width: 350},
                    drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
                    drawerActiveBackgroundColor: '#e9e9e9',
                    drawerActiveTintColor: '#000000'
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        drawerIcon: () => <FontAwesome name="home" size={20} color="#000" />,
                        title: 'Tela Principal',
                        headerStyle: {
                            backgroundColor: '#2563EB',
                        },
                    }}
                />

                <Drawer.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        drawerIcon: () => <FontAwesome6 name="add" size={24} color="black" />,
                        title: 'Cadastro',
                        headerStyle: {
                            backgroundColor: '#7C3AED',
                        },
                    }}
                />

                <Drawer.Screen
                    name="Relatório"
                    component={Relatorio}
                    options={{
                        drawerIcon: () => <Foundation name="info" size={24} color="black" />,
                        title: 'Relatórios',
                        headerStyle: {
                            backgroundColor: '#059669',
                        },
                    }}
                />

                <Drawer.Screen
                    name="Graficos"
                    component={Graficos}
                    options={{
                        drawerIcon: () => <AntDesign name="bar-chart" size={24} color="black" />,
                        title: 'Gráficos',
                        headerStyle: {
                            backgroundColor: '#DC2626',
                        },
                        animation: 'fade',
                    }}
                />

                <Drawer.Screen 
                    name="Aula01"
                    component={Aula01}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula01'
                    }}
                />

                <Drawer.Screen 
                    name="Aula02"
                    component={Aula02}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula02'
                    }}
                />
                
                    <Drawer.Screen 
                        name="Aula02_FlexBox"
                        component={Aula02_FlexBox}
                        options={{
                            drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                            title: 'Aula02_FlexBox'
                        }}
                    />

                <Drawer.Screen 
                    name="Aula03"
                    component={Aula03}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula03'
                    }}
                />

                <Drawer.Screen 
                    name="Aula03_Exercicio"
                    component={Aula03_Exercicio}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula03_Exercicio'
                    }}
                />

                <Drawer.Screen 
                    name="Aula03_Exercicio2"
                    component={Aula03_Exercicio2}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula03_Exercicio2'
                    }}
                />
                
                <Drawer.Screen 
                    name="Aula04"
                    component={Aula04}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula04'
                    }}
                />

                <Drawer.Screen 
                    name="Aula05"
                    component={Aula05}
                    options={{
                        drawerIcon: () => <FontAwesome name="book" size={24} color="black" />,
                        title: 'Aula05'
                    }}
                />
            </Drawer.Navigator>
        // </NavigationContainer>
    );
};

export default NavDrawer;