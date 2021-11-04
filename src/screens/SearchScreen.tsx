import React from 'react';
import {
  Platform,
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {FlatList} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Cargando</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />
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
              paddingBottom: 10,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({index, item}) => (
          <PokemonCard pokemon={item} />
          // <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
