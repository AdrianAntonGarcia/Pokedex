import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull, Ability} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}
export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* Types y peso*/}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={{...styles.title}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={{...styles.title}}>Peso</Text>
        <Text style={{...styles.regularText}}>{pokemon.weight}kg</Text>
      </View>
      {/* Sprites */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>
      {/* habilidades */}

      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Base Skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Movimientos */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Moves</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Stats */}
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Moves</Text>
        <View>
          {pokemon.stats.map(({stat, base_stat}) => (
            <View style={{flexDirection: 'row'}} key={stat.name}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: 150}}>
                {stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* sprite final */}
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  title: {fontSize: 22, fontWeight: 'bold', marginTop: 20},
  regularText: {fontSize: 19},
  basicSprite: {height: 100, width: 100},
});
