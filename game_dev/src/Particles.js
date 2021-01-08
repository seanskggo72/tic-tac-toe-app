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
// Number of maximum particles to display on screen per time frame
const num_particles = 5;
// List containing particle information at a certain time frame
var particles = [];

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Particle_engine = () => {
  particles = [];
  Generate_particles();
  return (
    <GameEngine
      entities={{
        1: {
          particles_list: particles,
          renderer: Render_particles,
        }
      }}
      systems={[Movevement]}
      style={styles.priority} // check if this is necessary
    ></GameEngine>
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
// Game Engine Function
/////////////////////////////////////////////////////////////////////////////////

// Function for updating position per time frame
const Movevement = (state) => {
  particles.map(ent => {
    return ent.position[1] += 5;
  })
  return state;
}

// Checks each particle for its lifespan and filters and replaces with
// new particles accordingly
const particle_remove = () => {

}

/////////////////////////////////////////////////////////////////////////////////
// Game Engine Properties
/////////////////////////////////////////////////////////////////////////////////

// Return JSX containing a single particle information
const Particle = (state) => {
  return (
    <View style={{
      ...styles.particle_style,
      width: state.width,
      backgroundColor: state.backgroundColor,
      left: state.position[0],
      top: state.position[1],
      lifespan: state.lifespan,
    }} />
  );
}

// Create initial particle entities
const Generate_particles = () => {
  for (let i = 0; i < num_particles; i++) {
    particles.push({
      position: [start_y + random_int(0, -start_y * 2), start_x],
      width: random_int(5, 25),
      backgroundColor: choose_colour(),
      lifespan: 100,
    })
  }
}

// Render particles from particles list
const Render_particles = () => {
  return (
    <View>
      {particles.map((ent, index) => {
        return (
          <Particle
            position={ent.position}
            width={ent.width}
            backgroundColor={ent.backgroundColor}
            lifespan={ent.lifespan}
            key={index}
          />
        )
      })}
    </View>
  )
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

// Style Sheet
const styles = StyleSheet.create({
  // Position child relative to its parent
  priority: {
    position: 'absolute',
  },
  // Universal particle style
  particle_style: {
    position: 'absolute',
    borderRadius: 50,
    aspectRatio: 1,
  }
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export particle generator function
export default Particle_engine;