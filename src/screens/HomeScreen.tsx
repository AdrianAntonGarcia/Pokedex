import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appStyles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={appStyles.pokebolaBg}
      />
      <Text
        style={{
          ...appStyles.tittle,
          ...appStyles.globalMargin,
          color: 'black',
          top: top + 20,
        }}>
        Pokedex
      </Text>
    </>
  );
};
