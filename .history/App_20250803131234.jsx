import React from 'react';
import { StatusBar, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import colors from './src/constants/colors';

const App = () => {
  return (
    <>
      <Text >Mantra Counter</Text>

      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomeScreen />
    </>
  );
};

export default App;