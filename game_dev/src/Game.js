/////////////////////////////////////////////////////////////////////////////////
// Game.js
// Dynamcially creates 2D grid for gameplay as well as other features such 
// as background and animations
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Game_background from './Svg_renderer';
import Particle_engine from './Particles';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

// Grid dimensions - constant to reduce render time compared to for loop
const grid = [
  [[0, null], [1, null], [2, null], [3, null], [4, null]],
  [[5, null], [6, null], [7, null], [8, null], [9, null]],
  [[10, null], [11, null], [12, null], [13, null], [14, null]],
  [[15, null], [16, null], [17, null], [18, null], [19, null]],
  [[20, null], [21, null], [22, null], [23, null], [24, null]]
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
    if (temp[arr_index][row_index][1] === null) {
      temp[arr_index][row_index][1] = true;
    } else temp[arr_index][row_index][1] = !temp[arr_index][row_index][1];
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
  let img;
  if (bool === null) img = null;
  else img = bool ? circle : cross;
  return (
    <LinearGradient
      colors={['#00d5ff', '#11adab', '#1ffffb']}
      style={styles.gradient}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      key={String(index)}
    >
      <Pressable
        style={styles.button}
        onPress={change_grid.bind(this, index)}
      >
        <Image
          source={img}
          style={styles.image}
          resizeMethod={'resize'} // android
        />
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
