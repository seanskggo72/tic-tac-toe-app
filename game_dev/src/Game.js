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
  return state;
}

// Helper function for makeGrid -> given a row array, return
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
      <Game_background style={{position: 'absolute'}}/>
      {state.map((arr, index) => {
        return makeRow(arr, index);
      })}
    </View>
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
  }
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Game_screen;
