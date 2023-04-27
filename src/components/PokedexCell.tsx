import { Box, Center, Text, Image } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { PokemonColour, PokemonProps } from "./PokemonProfile";

type PokedexEntryProps = {
  item: PokedexPokemonProps;
  onPress: () => void;
};

export type PokedexPokemonProps = {
  index: number;
  item: {
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
    };
  };
};



export const PokedexCell = ({ item, onPress }: PokedexEntryProps) => {

  const [colour, setColour] = useState<PokemonColour>();
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  
  const fetchColour = async () => {
    const resp = await fetch(item.item.pokemon_species.url);
    const typeData = await resp.json();
    setColour(typeData);
};

const fetchSprite = async () => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+(item.index+1)+'/');
  const pokemonData = await resp.json();
  setPokemon(pokemonData);
};
  
  useEffect(() => {
      fetchColour();
      fetchSprite();
  }, []);

    if  (colour && pokemon) return(
          <TouchableOpacity onPress={onPress}>
              <Box borderRadius='3xl' bg={colour.color.name ?? 'gray.100'} py='40px' margin='10px' flex='wrap' alignItems='center'>
                  <Image src={pokemon.sprites.front_default} alt='Cant find pokemon' height="100px" width="100px"/>
                  <Center>
                        <Text>{item.item.pokemon_species.name}</Text>
                  </Center>
              </Box>
        </TouchableOpacity>
    )
  return <></>
};
