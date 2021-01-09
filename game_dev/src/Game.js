/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay as well as other features such 
// as background and animations
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import Game_background from './Svg_renderer';
import Particle_engine from './Particles';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

// Grid dimensions - constant to reduce render time compared to for loop
const grid = [
  [[0, true], [1, true], [2, true], [3, true], [4, true]],
  [[5, true], [6, true], [7, true], [8, true], [9, true]],
  [[10, true], [11, true], [12, true], [13, true], [14, true]],
  [[15, true], [16, true], [17, true], [18, true], [19, true]],
  [[20, true], [21, true], [22, true], [23, true], [24, true]]
];
// Screen dimensions
const button_dimension = Dimensions.get('window').width * 0.15;
// Load PNG files 
const circle = require('../assets/circle.png');
const cross = require('../assets/cross.png');

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Create 2D grid
const CreateGrid = () => {
  const [grid_state, set_grid_image] = useState(grid);
  const change_grid = (index) => {
    let temp = [...grid_state], arr_index = Math.floor(index / 5);
    let row_index = index - (5 * arr_index);
    temp[arr_index][row_index][1] = !temp[arr_index][row_index][1];
    set_grid_image(temp);
  }
  return (
    grid_state.map((row, index) => {
      return (
        <View style={styles.row_render} key={`row${index}`}>
          {row.map(ele => { return node(ele[0], ele[1], change_grid) })}
        </View>
      )
    })
  );
}

// Helper for CreateGrid function: returns JSX for each grid cell
const node = (index, bool, change_grid) => {
  let img = bool ? circle : cross;
  return (
    <Pressable
      style={styles.button}
      onPress={change_grid.bind(this, index)}
      key={String(index)}
    >
      <Image
        source={img}
        style={styles.image}
        resizeMethod={'resize'} // android
      />
    </Pressable>
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
    flex: 1,
    resizeMode: 'contain',
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Game_screen;
