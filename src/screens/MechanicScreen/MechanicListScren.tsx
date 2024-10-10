import React from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import { mockMechanics } from '../../mocks/mechnicMocks'; // Importe os dados mockados

const MechanicListScreen: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={mockMechanics}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 15, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                        <Text>Avaliação: {item.rating}</Text>
                        <Text>Serviços: {item.services.join(', ')}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default MechanicListScreen;