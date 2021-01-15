/////////////////////////////////////////////////////////////////////////////////
// Modal.js
// Creates a modal upon finished game state
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { StyleSheet, Pressable, Modal, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Function that determines whether to show the modal or not
const Show_modal = (show, set_modal) => {
  if (show) {
    return (
      <Modal
        animationType="fade" transparent={true} visible={true}
        onRequestClose={() => { console.log('closed') }}
      >
        <View style={styles.main_container}>
          <View style={styles.child_container}>
            <Text>yeet</Text>
            <LinearGradient
              colors={['#00d5ff', '#11adab', '#1ffffb']} style={styles.gradient}
              start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            >
              <Pressable style={styles.button} onPress={() => set_modal(false)}>
                <Text>Press me</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    )
  }
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
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  child_container: {
    backgroundColor: '#32a852',
    height: 500,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    width: 150,
  },
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Show_modal;