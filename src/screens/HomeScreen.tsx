import React from 'react';
import {ActivityIndicator, FlatList, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {appStyles} from '../theme/appTheme';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

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
        numColumns={2}
        //Header component
        ListHeaderComponent={
          <Text
            style={{
              ...appStyles.tittle,
              ...appStyles.globalMargin,
              color: 'black',
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({index, item}) => (
          <PokemonCard pokemon={item} />
          // <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
        )}
        // Infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        // activity indicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </>
  );
};
