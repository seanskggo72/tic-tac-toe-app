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
// Determines the spawn rate of particles (between 0 and 1)
const spawn_rate = 0.05;
// Height of screen
const screen_height = Dimensions.get('window').height;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const Particle_engine = () => {
  return (
    <GameEngine
      entities={{ 1: { particles: [], renderer: Render_particles } }}
      systems={[Update_particles, Spawn_particles]}
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

const Spawn_particles = (state) => {
  let rate = Math.random(), size = random_int(5, 20);
  if (rate > spawn_rate) return state;
  if (state[1].particles.length >= num_particles) return state;
  state[1].particles.push({
    position: [start_y + random_int(0, -start_y * 2), start_x],
    width: size,
    backgroundColor: choose_colour(),
    lifespan: screen_height/4,
    time: 1
  })
  return state;
}

// Function for updating position per time frame
const Update_particles = (state) => {
  for (let index in state[1].particles) {
    let time = state[1].particles[index].time/20;
    let mass = state[1].particles[index].width/5;
    state[1].particles[index].position[1] += mass * time;
    state[1].particles[index].lifespan--;
    state[1].particles[index].time++;
    if (state[1].particles[index].lifespan < 0) {
      state[1].particles.splice(index, 1);
    }
  }
  return state;
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
      time: state.time
    }} />
  );
}

// Render particles from particles list
const Render_particles = (state) => {
  return (
    <View>
      {state.particles.map((ent, index) => {
        return (
          <Particle
            position={ent.position}
            width={ent.width}
            backgroundColor={ent.backgroundColor}
            lifespan={ent.lifespan}
            time={ent.time}
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