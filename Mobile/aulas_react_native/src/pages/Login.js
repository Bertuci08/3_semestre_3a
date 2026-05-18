import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-web';

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Tela de Login</Text>
            <Button title='ENTRAR' onPress={() => navigation.navigate('MenuPrincipal')} />
        </View>
    );
};

export default Login;