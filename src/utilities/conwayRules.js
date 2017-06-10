import { each, includes } from 'lodash';

export default function applyConwayRules(data, size) {
  const deathList = [], birthList = [];
  
  each(data, (d, idx) => {
    const neighbours = neighboursFor(idx, data, size);
    const liveNeighbourCount = neighbours.filter(n => n === true).length;

    // Rule 1: Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    if(d && liveNeighbourCount < 2) deathList.push(idx)

    // Rule 2: Any live cell with two or three live neighbours lives on to the next generation.
    // Happens naturally

    // Rule 3: Any live cell with more than three live neighbours dies, as if by overpopulation.
    if(d && liveNeighbourCount > 3) deathList.push(idx);

    // Rule 4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if(!d && liveNeighbourCount === 3) birthList.push(idx);
  });
  
  return data.map((d, idx) => {
    if(includes(deathList, idx)) return false;
    if(includes(birthList, idx)) return true;
    return d;
  });
}

// returns an array of indexes which would constitute the 
// neighbours of the given index
function neighboursFor(index, data, size) {

  const allNeighbours = [
    index - size - 1, index - size, index - size + 1,
    index - 1, index + 1,
    index + size - 1, index + size, index + size + 1
  ]

  return allNeighbours
    .map(d => d < 0 ? (size ** 2) + d : d)
    .map(d => d > size ** 2 ? (d % size ** 2) : d)
    .map(i => data[i]);
}