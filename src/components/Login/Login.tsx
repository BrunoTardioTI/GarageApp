import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Login.styles';

const Login: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = () => {
        if (username && password) {
            onLogin(username, password);
        } else {
            setError('Preencha todos os campos');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login - GarageApp</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

export default Login;