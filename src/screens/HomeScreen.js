import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MediSearch</Text>
            <Text style={styles.subtitle}>Find care, feel secure.</Text>
            <Button
                title="View Hospitals"
                onPress={() => navigation.navigate('HospitalList')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default HomeScreen;
