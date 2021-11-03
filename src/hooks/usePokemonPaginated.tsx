import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  SimplePokemon,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setisLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const nextPageUrl = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40',
  );

  const loadPokemons = async () => {
    setisLoading(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(
      ({name, url}, index) => {
        // "https://pokeapi.co/api/v2/pokemon/21/"
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return {
          id,
          name,
          picture,
        };
      },
    );
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isLoading, simplePokemonList};
};
