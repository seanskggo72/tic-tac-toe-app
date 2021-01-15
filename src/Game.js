/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay as well as other features such 
// as background and animations
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Dimensions, Modal, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Game_background from './Svg_renderer';
import Show_modal from './Modal';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

// Grid dimensions - constant to reduce render time compared to for loop
// Each cell is in the form [index, image, pressed]
const grid = [
  [[0, null, false], [1, null, false], [2, null, false]],
  [[3, null, false], [4, null, false], [5, null, false]],
  [[6, null, false], [7, null, false], [8, null, false]],
];
// Screen dimensions
const button_dimension = Dimensions.get('window').width * 0.23;
// Load PNG files 
const circle = require('../assets/circle.png');
const cross = require('../assets/cross.png');
// Keep track of turn
var turn = true;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Create 2D grid
const CreateGrid = () => {
  const [grid_state, set_grid_image] = useState(grid);
  const [modal_on, set_modal_on] = useState(true);
  // Toggle modal visibility
  const set_modal = (mode) => {
    set_modal_on(mode);
  }
  const change_grid = (index) => {
    // Calculate position on grid given index
    let temp = [...grid_state]
    let col = Math.floor(index / 3), row = index - (3 * col);
    // If the button was already pressed, return immediately
    if (temp[col][row][2]) return;
    // Else toggle turn and set the symbol for that index only
    else {
      temp[col][row][1] = turn;
      temp[col][row][2] = true;
      turn = !turn;
    }
    set_grid_image(temp);
  }
  return (
    grid_state.map((row, index) => {
      return (
        <View style={styles.row_render} key={`row${index}`}>
          {Show_modal(modal_on, set_modal)}
          {row.map(ele => { return node(ele[0], ele[1], change_grid) })}
        </View>
      )
    })
  );
}

// Given a boolean value (+ null) return corresponding image
const choose_image = (image) => {
  if (image === null) return null;
  else return image ? circle : cross;
}

// Helper for CreateGrid function: returns JSX for each grid cell
const node = (index, image, change_grid) => {
  let img = choose_image(image);
  return (
    <LinearGradient
      colors={['#00d5ff', '#11adab', '#1ffffb']} style={styles.gradient}
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      key={String(index)}
    >
      <Pressable style={styles.button} onPress={change_grid.bind(this, index)}>
        <Image source={img} style={styles.image} resizeMethod={'resize'} />
      </Pressable>
    </LinearGradient>
  );
}

// Return 2D grid of buttons
const Game_screen = () => {
  return (
    <View style={styles.main_container}>
      <Game_background />
      <View style={styles.priority}>
        <CreateGrid />
      </View>
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
    aspectRatio: 1,
    width: button_dimension,
  },
  gradient: {
    borderRadius: 8,
  },
  // Image dimensions
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Game_screen;