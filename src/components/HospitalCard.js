import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HospitalCard = ({ hospital}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Map', { hospitalId: hospital.hospital_id })}
        >
            <Text style={styles.name}>{"🏥 " + hospital.name}</Text>
            <Text style={styles.address}>{hospital.address}</Text>
            <Text style={styles.contact}>Contact: {hospital.contact_number || 'N/A'}</Text>
            <Text style={styles.partner}>
                {hospital.is_partner ? '⭐ Partner Hospital' : ''}
            </Text>
        </TouchableOpacity>
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
