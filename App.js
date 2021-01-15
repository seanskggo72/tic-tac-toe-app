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
  return Game_screen();
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
      <Stack.Navigator screenOptions={{ headerTransparent: true, headerTintColor: 'blue' }}>
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: '' }} />
        <Stack.Screen name="Instructions" component={Instructions} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}
