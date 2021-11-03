import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {PokemonScreen} from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
