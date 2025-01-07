import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { getAllHospitals } from '../services/api';
import HospitalCard from '../components/HospitalCard';
import SearchBar from '../components/SearchBar';
import { Picker } from '@react-native-picker/picker';

const HospitalListScreen = () => {
    const [hospitals, setHospitals] = useState([]);
    const [filteredHospitals, setFilteredHospitals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const specializations = [
    { id: '', name: 'All Specializations' },
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Neurology' },
    { id: 3, name: 'Pediatrics' },
    ];

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await getAllHospitals();
                setHospitals(response.data);
                setFilteredHospitals(response.data);
            } catch (err) {
                console.error(err, "Test");
            } finally {
                setLoading(false);
            }
        };
        fetchHospitals();
    }, []);

    useEffect(() => {
        const filterHospitals = () => {
            const query = searchQuery.toLowerCase();
            const filtered = hospitals.filter((hospital) =>
                hospital.name.toLowerCase().includes(query)
            );
            setFilteredHospitals(filtered);
        };
        filterHospitals();
    }, [searchQuery]);

    useEffect(() => {
      const filterBySpecialization = async () => {
          if (!selectedSpecialization) {
              setFilteredHospitals(hospitals);
          } else {
              const response = await getHospitalsBySpecialization(selectedSpecialization);
              setFilteredHospitals(response.data);
          }
      };
      filterBySpecialization();
    }, [selectedSpecialization]);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="Search hospitals by name..."
            />
            {filteredHospitals.length > 0 ? (
                <FlatList
                    data={filteredHospitals}
                    keyExtractor={(item) => item.hospital_id.toString()}
                    renderItem={({ item }) => <HospitalCard hospital={item} />}
                />
            ) : (
                <Text style={styles.noResults}>No hospitals found.</Text>
            )}
            <Picker
                selectedValue={selectedSpecialization}
                onValueChange={(itemValue) => setSelectedSpecialization(itemValue)}
            >
                {specializations.map((spec) => (
                    <Picker.Item key={spec.id} label={spec.name} value={spec.id} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResults: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 16,
        color: '#777',
    },
});

export default HospitalListScreen;
