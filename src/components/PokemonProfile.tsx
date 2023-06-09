import React, { useEffect, useState } from 'react';
import { Box, Center, Pressable, Text, Image } from 'native-base';
import { Stats } from './Stats';
import { Evolutions } from './Evolutions';
import { Moves } from './Moves';

export type PokemonProps = {

  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight:number;
  sprites:{
    front_default: string;
  };
  types : {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonColour = {
  color: {
    name: string;
  };
  flavor_text_entries : {
    flavor_text: string;
  }[];
}


export const PokemonProfile = ({navigation, route}) => {

  const [isActive, setIsActive] = useState<number>(0);

  const [data, setData] = useState<PokemonProps>();
  const [colourTheme, setColourTheme] = useState<PokemonColour>()
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+route.params.id+'/');
      const data = await resp.json();
      setData(data);
      setLoading(false);
  };

  const fetchColour = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+route.params.id+'/');
    const typeData = await resp.json();
    setColourTheme(typeData);
    setLoading(false);
};
  
  useEffect(() => {
      fetchData();
      fetchColour();
  }, []);


    if (data && colourTheme) return(
     <Box bg={colourTheme.color.name} height='full' rounded="xl">

          <Box height="250px" zIndex={1}>
            <Box marginTop={'15%'}>
            <Center >
              <Image src={data.sprites.front_default} alt='Cant find pokemon' height="300px" width="300px"/>
            </Center>
            </Box>
          </Box>


          <Box bg='background'borderTopRadius={'3xl'} height="full" > 
            <Center>
              <Text color='black' fontSize="32px" paddingTop="70px" paddingBottom="15px">{data.name}</Text>
              <Box flexDir='row'>
                {data.types.map((item, index)=>{
                  return(
                    <Box borderRadius='3xl' bg={colourTheme.color.name} px='20px'  margin="8px">
                        <Text color={'background'}  >{item.type.name}</Text>
                    </Box>
                )})}
                </Box>
             
              <Text textAlign='center' fontSize={"12px"} paddingX='5'> {colourTheme.flavor_text_entries[0].flavor_text}.</Text>
            </Center>
            
            <Box flexDirection="row" borderBottomColor='black' borderBottomRadius='1px' paddingY='15px'>
              <Box flex={1} p={1} bg={isActive===0? colourTheme.color.name:'background'}><Center><Pressable onPress={()=>setIsActive(0)}><Text color={isActive===0? 'background':colourTheme.color.name}>Stats</Text></Pressable></Center></Box>
              <Box flex={1} p={1} bg={isActive===1? colourTheme.color.name:'background'}><Center><Pressable onPress={()=>setIsActive(1)}><Text color={isActive===1? 'background':colourTheme.color.name}>Evolutions </Text></Pressable></Center></Box>
              <Box flex={1} p={1} bg={isActive===2? colourTheme.color.name:'background'}><Center><Pressable onPress={()=>setIsActive(2)} testID='Moves'><Text color={isActive===2? 'background':colourTheme.color.name}>Moves</Text></Pressable></Center></Box>
            </Box>

          {(isActive === 0) ? <Stats /> : <></>}
          {(isActive === 1) ? <Evolutions /> : <></>}
          {(isActive === 2) ? <Moves /> : <></>}


          </Box>
      </Box>
  )
  return (<></>)
}
