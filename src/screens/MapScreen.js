import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getAllHospitals } from '../services/api';

const MapScreen = () => {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await getAllHospitals();
                setHospitals(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchHospitals();
    }, []);

    if (loading) {
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
                latitude: 8.4542, // Default center in Cagayan de Oro
                longitude: 124.6319,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            {hospitals.map((hospital) => (
                <Marker
                    key={hospital.hospital_id}
                    coordinate={{
                        latitude: hospital.latitude,
                        longitude: hospital.longitude,
                    }}
                    title={hospital.name}
                    description={hospital.address}
                />
            ))}
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
