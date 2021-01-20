/////////////////////////////////////////////////////////////////////////////////
// Check_state.js
// Checks game state given array representation of board
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Given a game state, checks whether the game is won, drawn or lost
const Check_state = (gd) => {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (gd[i][0][1] === true && gd[i][1][1] === true && gd[i][2][1] === true) return [true, 'circle'];
    if (gd[i][0][1] === false && gd[i][1][1] === false && gd[i][2][1] === false) return [true, 'cross'];
    if (gd[0][i][1] === true && gd[1][i][1] === true && gd[2][i][1] === true) return [true, 'circle'];
    if (gd[0][i][1] === false && gd[1][i][1] === false && gd[2][i][1] === false) return true;
  }
  // check diagonals
  if (gd[0][0][1] === true && gd[1][1][1] === true && gd[2][2][1] === true) return [true, 'circle'];
  if (gd[0][0][1] === false && gd[1][1][1] === false && gd[2][2][1] === false) return [true, 'cross'];
  if (gd[0][2][1] === true && gd[1][1][1] === true && gd[2][0][1] === true) return [true, 'circle'];
  if (gd[0][2][1] === false && gd[1][1][1] === false && gd[2][0][1] === false) return [true, 'cross'];
  // Check draw
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gd[i][j][1] === null) return [false, null];
    }
  }
  return [true, 'draw'];
}

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Check_state;