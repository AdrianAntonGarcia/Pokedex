import {useState, useEffect, useRef} from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);
  const isMounted = useRef(true);
  const loadPokemon = async () => {
    const resp = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    loadPokemon();
    return () => {
      isMounted.current = false;
    };
  }, []);
  return {isLoading, pokemon};
};
