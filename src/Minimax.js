/////////////////////////////////////////////////////////////////////////////////
// Minimax.js
// Given a game state in array, utilise minimax algorithm to return index of 
// best play
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Given a game state, use minimax to return index of best play
const Best_move = (grid, player) => {
  let best_value = player ? -1 : 1;
  let best_index = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j][1] === null) {
        grid[i][j][1] = player;
        let value = minimax(grid, !player);
        if ((value <= best_value && !player) || (value >= best_value && player)) {
          best_value = value;
          best_index = 3 * i + j;
        }
        grid[i][j][1] = null;
      }
    }
  }
  return best_index
}

const minimax = (grid, player) => {
  let result = check(grid);
  if (result !== null) return result;
  let best_value = player ? -1 : 1;
  // If maximiser's move (player === true)
  if (player) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j][1] === null) {
          grid[i][j][1] = player;
          let value = minimax(grid, !player);
          best_value = value > best_value ? value : best_value;
          grid[i][j][1] = null;
        }
      }
    }
    // If minimser's move:
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j][1] === null) {
          grid[i][j][1] = player;
          let value = minimax(grid, !player);
          best_value = value < best_value ? value : best_value;
          grid[i][j][1] = null;
        }
      }
    }
  }
  return best_value;
}

const check = (gd) => {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (gd[i][0][1] === true && gd[i][1][1] === true && gd[i][2][1] === true) return 1;
    if (gd[i][0][1] === false && gd[i][1][1] === false && gd[i][2][1] === false) return -1;
    if (gd[0][i][1] === true && gd[1][i][1] === true && gd[2][i][1] === true) return 1;
    if (gd[0][i][1] === false && gd[1][i][1] === false && gd[2][i][1] === false) return -1;
  }
  // check diagonals
  if (gd[0][0][1] === true && gd[1][1][1] === true && gd[2][2][1] === true) return 1;
  if (gd[0][0][1] === false && gd[1][1][1] === false && gd[2][2][1] === false) return -1;
  if (gd[0][2][1] === true && gd[1][1][1] === true && gd[2][0][1] === true) return 1;
  if (gd[0][2][1] === false && gd[1][1][1] === false && gd[2][0][1] === false) return -1;
  // Check draw
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gd[i][j][1] === null) return null;
    }
  }
  return 0;
}

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Best_move;