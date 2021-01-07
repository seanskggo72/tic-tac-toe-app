/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main file responsible for how application will be rendered
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import 'react-native-gesture-handler';
import React from 'react';
import Game_screen from './src/Game';
import HomeScreen from './src/Home';
import InstructionsScreen from './src/Instructions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Homescreen Component
const Home = ({ navigation }) => {
  return HomeScreen(navigation);
}

// Instructions Screen Component
const Instructions = ({ navigation }) => {
  return InstructionsScreen(navigation);
}

// Gamescreen Component
const Game = () => {
  return Game_screen(5);
}

// Stack Navigator
const Stack = createStackNavigator();

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Rendering windows
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Instructions" component={Instructions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
