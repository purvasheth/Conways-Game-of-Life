export const createArray = (n, m) => {
  const aliveArray = shuffleArray(n, m)
  const array = Array(n).fill().map(() => Array(m).fill(false));
  let index = 0
  while (index < Math.floor(aliveArray.length / 2)) {
    const i = Math.floor(aliveArray[index] / m)
    const j = Math.floor(aliveArray[index] % m)
    array[i][j] = true
    index++
  }
  return array
}

// copied shamelessly from https://stackoverflow.com/a/12646864
const shuffleArray = (n, m) => {
  const array = [...Array((n * m)).keys()].map(i => i)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
export const clearArray = (n, m) => (
  Array(n).fill().map(() => Array(m).fill(false))
)

const getNeighbors = ({ array, col, row, n, m }) => {
  let count = 0
  let rowStart = -1
  let rowEnd = 2
  let colStart = -1
  let colEnd = 2
  if (row === 0) {
    rowStart = 0
  }
  else if (row === (n - 1)) {
    rowEnd = 1
  }
  if (col === 0) {
    colStart = 0
  }
  else if (row === (n - 1)) {
    colEnd = 1
  }

  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = colStart; j < colEnd; j++) {
      if (i === 0 && j === 0);
      else {
        if (array[row + i][col + j]) {
          count++
        }
      }
    }
  }
  return count
}
export const generateNewState = ({ array, n, m }) => {
  /*
  Rules:
  + Any live cell with two or three live neighbours survives.
  + Any dead cell with three live neighbours becomes a live cell.
  + All other live cells die in the next generation. Similarly, all other dead cells stay dead.
  */
  const newArray = clearArray(n, m)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const count = getNeighbors({ array, row: i, col: j, n, m })
      if (array[i][j] && (count === 2 || count === 3)) {
        newArray[i][j] = true
      }
      if (!array[i][j] && count === 3) {
        newArray[i][j] = true
      }
    }
  }
  return newArray
}