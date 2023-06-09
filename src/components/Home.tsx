import { Box, Text, Button, Image } from 'native-base';

export const Home = ({ navigation }) => {
  const charmander = require('../../assets/charmander.png');
  return (
    <Box alignItems="center" bgColor="black" height="full">
      <Text color="yellow">Freddie's Pokedex!!!</Text>

      <Image size={'3xl'} margin={'1.5'} padding={'16'} bgColor="white" src={charmander} />
      <Button
        backgroundColor="red"
        borderRadius="3xl"
        bottom={0}
        onPress={() => navigation.navigate('Pokedex')}
        testID="Open Pokedex"
      >
        Open Pokedex
      </Button>
    </Box>
  );
};
