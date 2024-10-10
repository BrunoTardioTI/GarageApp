import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Login from '../../components/Login';
import { mockLoginData } from '../../mocks/authMocks'; // Importe o mock

const LoginScreen: React.FC = () => {
    const handleLogin = (username: string, password: string) => {
        // Simule a autenticação com os dados mockados
        if (username === mockLoginData.username && password === mockLoginData.password) {
            Alert.alert('Login bem-sucedido!', 'Bem-vindo ao GarageApp!');
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Login onLogin={handleLogin} />
        </SafeAreaView>
    );
};

export default LoginScreen;