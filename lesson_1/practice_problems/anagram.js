function anagram(word, list) {
  let anagramChecker = makeAnagramChecker(word);
  return list.filter(anagramChecker);
}

function makeAnagramChecker(testWord) {
  return function(attempt) {
    return areAnagrams(testWord, attempt);
  }
}

function areAnagrams(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]