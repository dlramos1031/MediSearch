import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HospitalCard = ({ hospital }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{hospital.name}</Text>
            <Text style={styles.address}>{hospital.address}</Text>
            <Text style={styles.contact}>Contact: {hospital.contact_number || 'N/A'}</Text>
            <Text style={styles.partner}>
                {hospital.is_partner ? '⭐ Partner Hospital' : ''}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    contact: {
        fontSize: 14,
        color: '#333',
    },
    partner: {
        fontSize: 14,
        color: '#2e7d32',
    },
});

export default HospitalCard;
