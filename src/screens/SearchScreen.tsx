import React from 'react';
import {
  Platform,
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {FlatList} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
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
              paddingBottom: 10,
              marginTop: top + 80,
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

const styles = StyleSheet.create({});
