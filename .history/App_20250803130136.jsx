import React from 'react';
import { StatusBar } from 'react-native';]

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomeScreen />
    </>
  );
};

export default App;