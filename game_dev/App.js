import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Style.js';

// Create 2D Object with specified length
const createGrid = (length) => {
  let state = {}, counter = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push({ key: counter, state: 0 });
      counter++; 
    }
    eval(`state.row${i} = temp`);
  }
  return state;
}

// Return 2D grid of buttons
const makeGrid = (length) => {
  let state = createGrid(length);
  return (
    <View style={styles.container}>
      {state.row0.map(element => {
        return (
          <View key={`${element.key}`}>
            <Button title={`${element.key}`} />
          </View>
        )
      })}
    </View>
  )
}

// Rendering
export default function App() {
  return makeGrid(5);
}
