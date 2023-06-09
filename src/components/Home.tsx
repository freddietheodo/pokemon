import { Box, Text, Button, Image, View } from 'native-base';
const charmander = require('../../assets/images/charmander.png');
export const Home = ({ navigation }) => {
  return (
    <View>
      <Box alignItems="center" bgColor="cream" height="full">
        <Text color="yellow">Freddie's Pokedex!!!</Text>
        <Image source={charmander} alt="Alternate Text" resizeMode="contain" size="xl" />
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
    </View>
  );
};
