/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
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
    <View style={styles.row_container} key={index}>
      {row.map(element => {
        return (
          <View key={String(element.key)}>
            <Pressable style={styles.button} android_ripple={{ color: 'aqua' }}>
              <ImageBackground source={require('../assets/circle.png')} style={styles.image}>
                <Text style={styles.text}>{String(element.key)}</Text>
              </ImageBackground>
            </Pressable>
          </View>
        );
      })}
    </View>
  )
}

// Return 2D grid of buttons
const Game_screen = (length) => {
  let state = createGrid(length);
  return (
    <View style={styles.col_container}>
      <Game_background style={{ position: 'relative' }} />
      <GameEngine
        entities={{
          1: {
            particles: [40, 40],
            renderer: <Temp />
          }
        }}
        style={{ position: 'absolute' }}
      ></GameEngine>
      <View style={{ position: 'absolute' }}>
        {createGrid(5)}
      </View>
    </View >
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

const styles = StyleSheet.create({
  col_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  row_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffe419",
    width: 50,
    height: 50,
    elevation: 25, // Android
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    padding: 15,
    textAlign: 'center',
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Game_screen;
