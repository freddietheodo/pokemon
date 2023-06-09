import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'native-base';
import { PokedexCell } from './PokedexCell';

export type PokedexProps = {
  pokemon_entries: PokedexPokemonProps[];
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

export const PokedexScroll = ({ navigation }) => {
  const [data, setData] = useState<PokedexProps>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokedex/1/?limit=20&offset=20');
    const data = await resp.json();

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item) => {
    return (
      <View flexDirection="column" flex="1">
        <PokedexCell
          item={item}
          onPress={() =>
            navigation.navigate('Pokemon', {
              id: item.item.entry_number,
            })
          }
        />
      </View>
    );
  };

  return (
    <View flex={1} justifyContent="center" backgroundColor={'cream'}>
      <FlatList
        data={data ? data.pokemon_entries : undefined}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
