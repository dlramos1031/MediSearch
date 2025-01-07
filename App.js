import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HospitalListScreen from './src/screens/HospitalListScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{ title: 'Menu' }} 
                />
                <Stack.Screen
                    name="HospitalList"
                    component={HospitalListScreen}
                    options={{ title: 'Hospitals' }}
                />
                <Stack.Screen 
                    name="Map" component={MapScreen} 
                    options={{ title: 'Map View' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
