// src/screens/LoginScreen.tsx
import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Login from '../components/Login/Login';

const LoginScreen: React.FC = () => {
    const handleLogin = (username: string, password: string) => {
        // Mock de autenticação
        if (username === 'mecanico' && password === 'senha123') {
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