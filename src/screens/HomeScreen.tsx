import React from 'react';
import {ActivityIndicator, FlatList, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {appStyles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemonList);
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={appStyles.pokebolaBg}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({index, item}) => (
          <Image
            source={{uri: item.picture}}
            style={{width: 100, height: 100}}></Image>
        )}
        // Infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        // activity indicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text
        style={{
          ...appStyles.tittle,
          ...appStyles.globalMargin,
          color: 'black',
          top: top + 20,
        }}>
        Pokedex
      </Text> */}
    </>
  );
};
