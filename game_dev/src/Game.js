/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import Game_background from './Svg_renderer';
import { GameEngine } from "react-native-game-engine";

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Create 2D Object with specified length
const createGrid = (length) => {
  let state = [], counter = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push({ key: counter, state: 0 });
      counter++;
    }
    state.push(temp);
  }
  return state.map((arr, index) => {
    return makeRow(arr, index);
  });
}

// Helper function for createGrid -> given a row array, return
// the buttons for that row in JSX
const makeRow = (row, index) => {
  return (
    <View style={styles.row_render} key={index}>
      {row.map(element => {
        return (
          <Pressable
            style={styles.button}
            android_ripple={{ color: 'aqua' }}
            key={String(element.key)}
          >
            <ImageBackground source={require('../assets/circle.png')} style={styles.image}>
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
      <Game_background style={{ position: 'relative' }} />
      <View style={{ position: 'absolute' }}>
        {createGrid(5)}
      </View>
      <GameEngine
        entities={{
          1: {
            particles: [0, 0],
            renderer: <Temp />
          }
        }}
        style={{ position: 'absolute' }}
      ></GameEngine>
    </View>
  );
}

const Temp = () => {
  return (
    <View
      style={
        {
          borderRadius: 50,
          left: 50,
          top: 50,
          width: 300,
          height: 300,
          backgroundColor: 'yellow'
        }
      }
    />
  );
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const button_dimension = Dimensions.get('window').width * 0.15;

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
  // Styles each individual button element in grid
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#ffe419",
    aspectRatio: 1,
    width: button_dimension,
    height: button_dimension,
  },
  // Image dimensions
  image: {
    width: button_dimension,
    height: button_dimension,
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
