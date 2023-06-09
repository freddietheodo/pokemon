import { Box, Text, Button, Image, View, Heading } from 'native-base';
const charmander = require('../../assets/images/charmander.png');
export const Home = ({ navigation }) => {
  return (
    <View margin-left="auto" bgColor="cream" margin-right="auto" height={'100%'}>
      <Box alignItems="center" paddingTop={'150'}>
        <Heading color="black" fontSize={'2xl'}>
          Freddie's Pokedex!!!
        </Heading>
        <Image source={charmander} alt="Alternate Text" resizeMode="contain" size="2xl" />
        <Button
          backgroundColor="red"
          borderRadius="3xl"
          bottom={0}
          onPress={() => navigation.navigate('Pokedex')}
          testID="Open Pokedex"
          margin={10}
          padding={5}
        >
          Open Pokedex
        </Button>
      </Box>
    </View>
  );
};
