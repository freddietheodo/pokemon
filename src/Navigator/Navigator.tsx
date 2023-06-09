import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonProfile } from "../components/PokemonProfile";
import { PokedexScroll } from "../components/PokedexScroll";
import { Home } from "../components/Home";


const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokedex" component={PokedexScroll} />
        <Stack.Screen name="Pokemon" component={PokemonProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
