/////////////////////////////////////////////////////////////////////////////////
// Grid.js
// Dynamcially creates 2D grid for gameplay
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

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

// Return 2D grid of buttons
const makeGrid = (length) => {
  let state = createGrid(length);
  return (
    <View style={styles.col_container}>
      {state.map(arr => {
        return makeRow(arr);
      })}
    </View>
  )
}

// Helper function for makeGrid -> given a row array, return
// the buttons for that row in JSX
const makeRow = (row) => {
  return (
    <View style={styles.row_container}>
      {row.map(element => {
        return (
          <View key={`${element.key}`}>
            <Button title={`${element.key}`} />
          </View>
        )
      })}
    </View>
  )
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  col_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  row_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default makeGrid;
