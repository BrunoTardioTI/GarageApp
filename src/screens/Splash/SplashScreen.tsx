import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Simula o carregamento por 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Navega para a tela Home
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GarageApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16446E', // Cor do fundo
  },
  text: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SplashScreen;