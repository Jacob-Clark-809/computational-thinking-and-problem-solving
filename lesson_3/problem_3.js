/*
Input: - word string, sounds like we can assume only letters and only one
single word.
Output: - true if it can be spelt according to spelling block rules, otherwise false

Spelling blocks contain two letters and can only be used once per word. When
used in a word only one of the two letters is "active".
Spelling blocks are case insensitive.

Data types: - input is a string
            - spelling blocks are array of arrays
            - return boolean

Algorithm:
- Generate array of arrays representing spelling blocks
- Iterate through each character in the word
- For each character find the spelling block it belongs to and then set remove
/set to undefined it from the array
- If we cannot find a spelling block that the current character belongs to, then
it must already have been removed and we can return false
- Once throuh the iteration we can return true
*/

function isBlockWord(word) {
  let spellingBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
                        ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'],
                        ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
                        ['Z', 'M']];

  for (let index = 0; index < word.length; index += 1) {
    let newSpellingBlocks = spellingBlocks.filter(block => {
      return !block.includes(word[index].toUpperCase());
    });

    if (newSpellingBlocks.length === spellingBlocks.length) {
      return false;
    }
    spellingBlocks = newSpellingBlocks;
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bAtCh'));       // true
