/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay as well as other features such 
// as background and animations
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import Game_background from './Svg_renderer';
import Particle_engine from './Particles';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

// Grid dimensions
const grid_dimension = 5;
// Screen dimensions
const button_dimension = Dimensions.get('window').width * 0.15;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Create 2D Object with grid_dimension global
const CreateGrid = () => {
  let state = [], counter = 0;
  for (let i = 0; i < grid_dimension; i++) {
    let temp = [];
    for (let j = 0; j < grid_dimension; j++) {
      temp.push({ key: counter, state: 0 });
      counter++;
    }
    state.push(temp);
  }
  return state.map((arr, index) => {
    return MakeRow(arr, index);
  });
}

// Helper function for createGrid -> given a row array, return
// the buttons for that row in JSX
const MakeRow = (row, index) => {
  return (
    <View style={styles.row_render} key={index}>
      {row.map(element => {
        return (
          <Pressable
            style={styles.button}
            android_ripple={{ color: 'aqua' }}
            key={String(element.key)}
          >
            <ImageBackground
              source={require('../assets/circle.png')}
              style={styles.image}
            >
              <Text style={styles.text}>{String(element.key)}</Text>
            </ImageBackground>
          </Pressable>
        );
      })}
    </View>
  )
}

// Return 2D grid of buttons
const Game_screen = () => {
  return (
    <View style={styles.main_container}>
      <Game_background />
      <View style={styles.priority}>
        <CreateGrid />
      </View>
      <Particle_engine />
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  // Aligns children in the centre
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Makes child elements render in a row
  row_render: {
    flexDirection: 'row',
  },
  // Position child relative to its parent
  priority: {
    position: 'absolute',
  },
  // Styles each individual button element in grid
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#ffe419",
    aspectRatio: 1,
    width: button_dimension,
  },
  // Image dimensions
  image: {
    aspectRatio: 1,
    width: button_dimension,
  },
  // Temporary padding for text
  text: {
    padding: 18,
    textAlign: 'center',
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Game_screen;
