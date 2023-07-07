function myReduce(array, func, initial) {
  let startIndex;
  if (initial === undefined) {
    initial = array[0];
    startIndex = 1;
  } else {
    startIndex = 0;
  }

  let accumulator = initial;
  for (let index = startIndex; index < array.length; index += 1) {
    accumulator = func(accumulator, array[index], index, array);
  }

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
