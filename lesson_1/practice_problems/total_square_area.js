/*
Two stages:
1. Map array to an array of areas.
2. Reduce array to a total area.
*/

function totalArea(rectangles) {
  let areas = rectangles.map(([height, width]) => height * width);
  return areas.reduce((total, current) => total + current);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

/*
1. Filter the array to only include squares.
2. Pass the filtered array to totalArea.
*/
function totalSquareArea(rectangles) {
  let onlySquares = rectangles.filter(([width, height]) => width === height);
  return totalArea(onlySquares);
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121