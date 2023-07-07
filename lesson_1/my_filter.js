function myFilter(array, func) {
  let filteredArray = [];

  array.forEach((value, index, array) => {
    if (func(value, index, array)) {
      filteredArray.push(value);
    }
  });

  return filteredArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let filtered = myFilter([{ a: 3, b: 4,  c: 5 },
                         { a: 5, b: 12, c: 13 },
                         { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);
console.log(filtered)
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]