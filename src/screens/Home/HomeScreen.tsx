import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao GarageApp</Text>
      <Button title="Listar Mecânicos" onPress={() => { /* Função a ser implementada */ }} />
      <View style={styles.separator} />
      <Button title="Histórico de Serviços" onPress={() => { /* Função a ser implementada */ }} />
      <View style={styles.separator} />
      <Button title="Configurações" onPress={() => { /* Função a ser implementada */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#16446E',
  },
  separator: {
    height: 20,
  },
});

export default HomeScreen;