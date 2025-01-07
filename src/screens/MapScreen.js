import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getAllHospitals, getHospitalById } from '../services/api';

const MapScreen = ({ route }) => {
    const [hospital, setHospital] = useState(null);
    const { hospitalId } = route.params; // Get the hospitalId from route params

    useEffect(() => {
        const fetchHospital = async () => {
            try {
                const response = await getHospitalById(hospitalId); // Fetch hospital by ID
                setHospital(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchHospital();
    }, [hospitalId]);

    if (!hospital) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: hospital.latitude,
                longitude: hospital.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            <Marker
                coordinate={{
                    latitude: hospital.latitude,
                    longitude: hospital.longitude,
                }}
                title={hospital.name}
                description={hospital.address}
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MapScreen;
