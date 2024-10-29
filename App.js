import React from 'react';
import MainNavigation from './components/MainNavigation';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
export default App;
