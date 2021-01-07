/////////////////////////////////////////////////////////////////////////////////
// Particle.js
// Creates falling particles effect in game screen using 
// react native game engine 
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

// Starting x and y coordinates of screen (from top-left corner of screen)
const start_x = -(Dimensions.get('window').height) / 2;
const start_y = -(Dimensions.get('window').width) / 2;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Particle_engine = () => {
  return (
    <GameEngine
      entities={{
        1: {
          particles: [0, 0],
          renderer: <Particle />
        }
      }}
      style={styles.priority}
    ></GameEngine>
  );
}

// Return JSX containing particle information
const Particle = () => {
  return (
    <View style={styles.particle_style} />
  );
}

// Given a min and max, return a random integer between the bounds
const random_int = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// Chooses a colour randomly from given options
const choose_colour = () => {
  let options = ['#143fff', '#42d7f5', '#42d7f5', 'white']
  let num = random_int(0, 4);
  return options[num];
}

/////////////////////////////////////////////////////////////////////////////////
// Game Engine Properties
/////////////////////////////////////////////////////////////////////////////////

const engine = {
  
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({

  // Position child relative to its parent
  priority: {
    position: 'absolute',
  },
  particle_style: {
    borderRadius: 50,
    left: start_y + random_int(0, -start_y * 2),
    top: start_x + 100,
    aspectRatio: 1,
    width: random_int(5, 25),
    backgroundColor: choose_colour()
  }
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export particle generator function
export default Particle_engine;