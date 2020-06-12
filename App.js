/* eslint-disable class-methods-use-this */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View, Text } from 'react-native';
import { Root } from 'native-base';
import Login  from './src/Login';
import Welcome from './src/Welcome';
import AppNavigator from './library/navigation';


const App = () => (
  
    <View>
       <AppNavigator />
    </View>
 
);

export default App;
