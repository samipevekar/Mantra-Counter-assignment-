import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomeScreen />
    </>
  );
};

export default App;