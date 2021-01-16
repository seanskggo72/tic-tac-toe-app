/////////////////////////////////////////////////////////////////////////////////
// Home.js
// Returns JSX to render Home Screen
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, Button, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Home_background } from './Svg_renderer';
import Particle_engine from './Particles';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const HomeScreen = (navigation) => {
  return (
    <View style={styles.main_container}>
      {/* <Particle_engine /> */}
      <Home_background />
      <View style={styles.logo}>
        <Image source={require('../assets/main.png')} style={styles.image} resizeMethod={'resize'} />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game_ai')}>
          <Text style={styles.text}>SINGLE PLAYER</Text>
        </Pressable>
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game')}>
          <Text style={styles.text}>MULTIPLAYER</Text>
        </Pressable>
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Instructions')}>
          <Text style={styles.text}>HOW TO PLAY</Text>
        </Pressable>

{/* 
        <Button title="Single Player"
          onPress={() => navigation.navigate('Game_ai')} style={styles.button_style} /> */}
        {/* <Button title="Multiplayer" onPress={() => navigation.navigate('Game')} />
        <Button title="Instructions" onPress={() => navigation.navigate('Instructions')} /> */}
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
  logo: {
    position: 'absolute',
    alignItems: 'center',
    width: width * 0.55,
    aspectRatio: 1,
    top: height * 0.12,
  },
  buttons: {
    position: 'absolute',
    alignItems: 'center',
    bottom: height * 0.36,
  },
  button_style: {
    borderRadius: 8,
    width: width * 0.4,
    height: width * 0.12,
    backgroundColor: '#038cfc',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: (width * 0.12) * 0.36,
    fontFamily: 'sans-serif-thin'
  }
})

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export Home function
export default HomeScreen;