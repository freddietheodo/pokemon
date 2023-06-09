import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { BaseTheme } from './src/theme';
import Navigator from './src/Navigator/Navigator';


export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>    
      <Navigator />
    </NativeBaseProvider>
  );
}



