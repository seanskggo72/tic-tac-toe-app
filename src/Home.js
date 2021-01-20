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
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game_ai')}
          android_ripple={{ color: '#7a919e' }}
        >
          <Text style={styles.text}>Player vs AI</Text>
        </Pressable>
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game')}
          android_ripple={{ color: '#7a919e' }}
        >
          <Text style={styles.text}>Player vs Player</Text>
        </Pressable>
        <Pressable style={styles.button_style} onPress={() => navigation.navigate('Instructions')}
          android_ripple={{ color: '#7a919e' }}
        >
          <Text style={styles.text}>How To Play</Text>
        </Pressable>
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
    backgroundColor: 'rgba(66, 153, 240, 0.7)',
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